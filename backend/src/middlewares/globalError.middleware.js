import { logger } from "#loggers/logger.js";
import { apiError } from "#utils/api-error.js";
import { Error } from "mongoose";


export const globalErrorHandler = (err, req, res, next) => {
    console.log('err', err)
    let error = err;

    if (!(error instanceof apiError)) {
        const statusCode = error.statusCode || error instanceof Error ? 400 : 500
        const message = error.message || 'Something went wrong'

        error = new apiError(statusCode, message)
    }

    const response = {
        ...error,
        message: error.message,
        ...(process.env.NODE_ENV === 'development' ? { stack: error.stack } : {})
    }

    logger.error(`${error.message}`);

    return res.status(error.statusCode).json(response)
}