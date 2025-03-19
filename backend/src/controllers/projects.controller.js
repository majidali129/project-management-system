import { Project } from "#models/project.model.js";
import { apiError } from "#utils/api-error.js";
import { apiResponse } from "#utils/api-response.js";
import { asyncHandler } from "#utils/async-handler.js";


const createProject = asyncHandler(async (req, res, next) => {
    const newProject = req.body;

    const project = await Project.create({ ...newProject, createdBy: req.user.userName });
    if (!project) return next(new apiError(500, 'Failed to create project!'));



    return res.status(201).json(new apiResponse(201, 'Project created successfully', project));
})


const getAllProjects = asyncHandler(async (req, res, next) => {
    const projects = await Project.find({});

    return res.status(200).json(new apiResponse(200, 'Projects retrieved successfully', projects));
})

const seedProjectsToDb = asyncHandler(async (req, res, next) => {
    console.log('seed', req.body)
    const seededData = await Project.insertMany(req.body, { ordered: false });

    return res.status(200).json(new apiResponse(200, 'Projects seeded successfully', seededData))

})



export { createProject, getAllProjects, seedProjectsToDb };

