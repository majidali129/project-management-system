import { apiError } from "#utils/api-error.js"
import { validationResult } from "express-validator"


export const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) return next()

    const expectedErrors = []
    errors.array().map(err => expectedErrors.push({ [err.path]: err.msg }));

    throw new apiError(400, 'Received data is invalid', expectedErrors)
}