import { User } from "#models/user.model.js";
import { apiError } from "#utils/api-error.js";
import { asyncHandler } from "#utils/async-handler.js";
import jwt from 'jsonwebtoken';

export const verifyJwt = asyncHandler(async (req, res, next) => {
    try {
        let token;

        if (req.cookies?.accessToken || (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))) {
            token = req.cookies.accessToken || req.headers.authorization.split(' ')[1];
        }

        if (!token)
            return next(
                new apiError(401, 'You are not logged in! please log in to get access')
            );

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded._id);
        if (!user) return next(new apiError(401, 'User belonging to this token does no longer exists'))

        req.user = user;
        next()
    } catch (error) {
        console.log('error jwt', error)
        return next(
            new apiError(401, 'Unauthorized access. Please login to get access')
        )
    }
})