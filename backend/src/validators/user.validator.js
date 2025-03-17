import { body } from 'express-validator';

export const registerUserValidator = () => [
    body('userName').trim().notEmpty().withMessage('Username is required').isLength({ min: 8, max: 16 }).withMessage('Username must be between 8 and 16 characters long'),
    body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ min: 4, max: 16 }).withMessage('Full name must be between 4 and 16 characters long'),
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('please enter a valid email address'),
    body('password').trim().notEmpty().withMessage('Password is required').isLength({ min: 8, max: 30 }).withMessage('Password must be between 8 and 30 characters long'),
    body('role').trim().notEmpty().withMessage('Role is required'),
    body('permissions').trim().notEmpty().withMessage('Permissions are required').isArray().withMessage('Permissions must be an array of strings')
]


export const loginUserValidator = () => [
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('please enter a valid email address'),
    body('password').trim().notEmpty().withMessage('Password is required').isLength({ min: 8, max: 30 }).withMessage('Password must be between 8 and 30 characters long'),
]


export const updatePasswordValidator = () => [
    body('oldPassword').trim().notEmpty().withMessage('Old password is required'),
    body('newPassword').trim().notEmpty().withMessage('New password is required').isLength({ min: 8, max: 30 }).withMessage('Password must be between 8 and 30 characters long'),
]