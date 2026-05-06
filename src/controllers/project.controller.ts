import { Request, Response} from "express";
import { createProjectService, getProjectsService } from "../services/project.services";

export const createProject = async (req: Request, res: Response) => {
  try {
    const { type, data } = req.body;

    if (!type || !data) {
      return res.status(400).json({ error: "type and data are required" });
    }

    const project = await createProjectService(type, data);

    return res.status(201).json(project);

  } catch (error) {
    return res.status(500).json({ message: "Error creating project" });
  }
};


export const getProjects = async(req: Request, res: Response) => {
    try {
        const projects = await getProjectsService();

        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects"});
    }
}
