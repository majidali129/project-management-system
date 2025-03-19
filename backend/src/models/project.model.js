import { ProjectStatus } from "#utils/constants.js";
import { model, Schema } from "mongoose";

const projectSchema = Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: Object.keys(ProjectStatus),
        default: ProjectStatus['pending'],
    },
    domain: {
        type: String,
        required: true,
        trim: true,
    },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    isPersonal: {
        type: Boolean,
        default: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    completedAt: Date,
    tags: {
        type: [String],
        default: []
    },
    assignedTeam: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    tasks: [
        { type: Schema.Types.ObjectId, ref: 'Task', default: [] }
    ],
    progress: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });


export const Project = model("Project", projectSchema);