import { Request, Response } from "express";
import * as schoolService from "../services/schoolService";

export async function createSchool(request: Request, response: Response) {
  const { institutionData, ...payload } = request.body;

  try {
    const newSchool = await schoolService.createSchool(
      payload,
      institutionData
    );
    response.status(201).json({ newSchool: payload });
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
  let schooldID = request.body.institutionID;

  let validId = /^\d+$/.test(schooldID);
  console.log(validId);

  if (!validId)
    return response.status(400).json({ message: "Id must be a number" });
  const id = +schooldID;

  try {
    const school = await schoolService.getSchoolByID(id, "");
    if (!school) {
      response.status(404).json({ error: "School not found" });
    } else {
      return response.status(200).json(school);
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}
export async function getSchoolById(request: Request, response: Response) {
  let schooldID = request.params.id;

  let validId = /^\d+$/.test(schooldID);
  console.log(validId);

  if (!validId)
    return response.status(400).json({ message: "Id must be a number" });
  const id = +schooldID;

  try {
    const school = await schoolService.getSchoolByID(id, "all");
    if (!school) {
      response.status(404).json({ error: "School not found" });
    } else {
      let transformedObject = Object.keys(
        school.InstitutionData_models.dataValues
      ).map((key) => {
        return {
          inputName: key,
          dataType:
            "string" || typeof school.InstitutionData_models.dataValues[key],
          required:
            typeof school.InstitutionData_models.dataValues[key] == "number"
              ? true
              : school.InstitutionData_models.dataValues[key],
        };
      });

      transformedObject = transformedObject.filter(
        (item) =>
          item.inputName !== "id" &&
          item.inputName !== "createdAt" &&
          item.inputName !== "updatedAt"
      );

      return response.status(200).json({
        message: "School data input",
        InstitutionData: transformedObject,
      });
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
