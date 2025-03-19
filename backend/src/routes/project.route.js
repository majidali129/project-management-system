
import { createProject, getAllProjects, seedProjectsToDb } from '#controllers/projects.controller.js';
import { verifyJwt } from '#middlewares/verifyJwt.middleware.js';
import { createProjectValidator } from '#validators/project.validator.js';
import { validate } from '#validators/validate.validator.js';
import express from 'express';


const router = express.Router()

router.use(verifyJwt);

router.route('/').post(createProjectValidator(), validate, createProject).get(getAllProjects)
router.route('/seed-projects').post(seedProjectsToDb)

export default router