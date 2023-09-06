import { Request, Response } from "express";
import * as schoolService from "../services/schoolService";

export async function createSchool(request: Request, response: Response) {
  const payload = request.body;

  try {
    const newSchool = await schoolService.createSchool(payload);
    response.status(201).json(newSchool);
  } catch (error: any) {
    response
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}

export async function getAllSchools(request: Request, response: Response) {
  try {
    const allSchools = await schoolService.getAllSchool();
    response.status(200).json(allSchools);
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getSchoolByID(request: Request, response: Response) {
  const id = +request.body.institutionID;

  try {
    const school = await schoolService.getSchoolByID(id);
    if (!school) {
      response.status(404).json({ error: "School not found" });
    } else {
      response.status(200).json(school);
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deleteSchoolByID(request: Request, response: Response) {
  const id = +request.params.id;

  try {
    const res = await schoolService.deleteSchoolByID(id);
    if (res === "School not found") {
      response.status(404).json({ error: "School not found" });
    } else {
      response.status(202).json({ message: res });
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateSchool(request: Request, response: Response) {
  const id = +request.params.id;
  const payload = request.body;

  try {
    const updatedSchool = await schoolService.updateSchool(id, payload);
    if (updatedSchool === "School is not found") {
      response.status(404).json({ error: "School not found" });
    } else {
      response.status(202).json(updatedSchool);
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}
