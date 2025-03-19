import { body, check } from "express-validator";


export const createProjectValidator = () => [
    body("title")
        .trim()
        .notEmpty().withMessage("Title is required").isLength({ min: 10 }).withMessage('Title must be at least 10 characters long'),

    body("description")
        .trim()
        .notEmpty().withMessage("Description is required"),

    body("domain")
        .trim()
        .notEmpty().withMessage("Domain is required"),
    body("tags")
        .optional()
        .isArray().withMessage("Tags must be an array of strings")
        .custom((tags) => tags.every(tag => typeof tag === "string"))
        .withMessage("Each tag must be a string"),
    check('startDate').notEmpty().withMessage("Start date is required"),
    check("endDate").notEmpty().withMessage("End date is required")

];