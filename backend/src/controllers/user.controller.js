import { User } from "#models/user.model.js";
import { apiError } from "#utils/api-error.js";
import { apiResponse } from "#utils/api-response.js";
import { asyncHandler } from "#utils/async-handler.js";
import bcrypt from 'bcrypt';

const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
}

const setAccessRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)

        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    } catch (error) {
        throw new apiError(
            500,
            'Something went wrong while generating the access/refresh tokens'
        );
    }

}

const registerUser = asyncHandler(async (req, res, next) => {
    const userData = await req.body
    console.log('body', userData)
    const existingUser = await User.findOne({
        $or: [{ userName: userData.userName }, { email: userData.email }]
    })

    console.log(existingUser)
    if (existingUser) return next(new apiError(400, 'User already exists!'))
    // save user to database
    const user = await User.create(userData)
    if (!user) return res.status(500).json(new apiError(500, 'Failed to register user!'));
    user.password = undefined;
    user.refreshToken = undefined;

    return res.status(201).json(new apiResponse(201, 'User registered successfully', user))
})

const loginUser = asyncHandler(async (req, res, next) => {
    const userData = await req.body;
    const user = await User.findOne({ email: userData.email });
    if (!user) return next(new apiError(400, 'Record not found'));
    const isPasswordCorrect = await user.isPasswordCorrect(userData.password, user.password);
    if (!isPasswordCorrect) return next(new apiError(400, 'Invalid email or password!'));
    const { accessToken, refreshToken } = await setAccessRefreshTokens(user._id);
    user.refreshToken = refreshToken;
    user.isActive = true;
    await user.save({ validateBeforeSave: false });

    const loggedInUser = await User.findById(user._id).select(
        '-password -refreshToken -emailVerificationToken -emailVerificationExpiry'
    );

    const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    }

    res.cookie('accessToken', accessToken, cookieOptions);
    res.cookie('refreshToken', refreshToken, cookieOptions);
    user.password = undefined;
    user.refreshToken = undefined;
    return res.status(200).json(new apiResponse(200, 'User logged in successfully', loggedInUser, { accessToken, refreshToken }))
})
const getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find()
    return res.status(200).json(new apiResponse(200, 'Users fetched successfully', users))
})

const getUserProfile = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id).select(
        '-password -refreshToken -emailVerificationToken -emailVerificationExpiry'
    );
    return res.status(200).json(new apiResponse(200, 'User profile fetched successfully', user))
})

const updatePassword = asyncHandler(async (req, res, next) => {
    const { oldPassword, newPassword } = await req.body;
    const user = await User.findById(req.user._id);
    if (!user) return next(new apiError(404, 'Somehow user no longer exist'));
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword, user.password);
    if (!isPasswordCorrect) return next(new apiError(400, 'Invalid old password'));
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword
    await user.save({ validateBeforeSave: false });
    return res.status(200).json(new apiResponse(200, 'Password updated successfully', { user: user._id }))
})

const logoutUser = asyncHandler(async (req, res, next) => {
    res.clearCookie('accessToken', cookieOptions)
    res.clearCookie('refreshToken', cookieOptions)
    const user = await User.findByIdAndUpdate(req.user._id, {
        $set: {
            isActive: false,
            refreshToken: ''
        }
    });
    await user.save({ validateBeforeSave: false });
    return res.status(200).json(new apiResponse(200, 'User logged out'))
})
export { getAllUsers, getUserProfile, loginUser, logoutUser, registerUser, updatePassword };

