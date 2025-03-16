
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose, { Schema, Types } from 'mongoose';
import validator from 'validator';

const User_Role = {
    'Project-Manager': 'Project-Manager',
    'Developer': 'Developer'
}

const userSchema = Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
        minLength: [8, 'Username must be at least 8 characters long']
    },
    fullName: {
        type: String,
        required: true,
        index: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        unique: true,
        trim: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 8
    },
    passwordChangedAt: {
        type: Date
    },
    refreshToken: String,
    emailVerificationToken: String,
    emailVerificationExpiry: Date,
    passwordResetToken: String,
    passwordResetExpiry: Date,
    role: {
        type: String,
        enum: Object.values(User_Role),
        default: User_Role.Developer,
        required: true
    },
    permissions: {
        type: [String],
        required: true
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    profilePhoto: {
        type: String,
    },
    experience: String,
    skills: {
        type: [String],
        default: []
    },
    projects: [{
        type: Types.ObjectId,
        ref: 'Project',
        default: []
    }],
    tasks: [
        {
            type: Types.ObjectId,
            ref: 'Task',
            default: []
        }
    ],
    teams: [{
        type: Types.ObjectId,
        ref: 'Team',
        default: []
    }]
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.methods.isPasswordCorrect = async function (candidatePass, userPass) {
    return await bcrypt.compare(candidatePass, userPass);
}

userSchema.methods.generateAccessToken = async function () {
    return await jwt.sign({ _id: this._id, userName: this.userName, role: this.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })
}

userSchema.methods.generateRefreshToken = async function () {
    return await jwt.sign({ _id: this._id, userName: this.userName, role: this.role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY })
}


export const User = mongoose.model('User', userSchema);