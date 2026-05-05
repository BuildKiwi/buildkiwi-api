import { Request, Response} from "express";
import { Project } from "../models/project.models";

export const createProject = async (req: Request, res: Response) => {
    try {
        const { type, data } = req.body;

        const project = await Project.create({ type, data });

        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: "Error creating project"});
    }
};


export const getProjects = async(req: Request, res: Response) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1});

        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects"});
    }
}
