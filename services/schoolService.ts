import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import School from "../model/School";
import SchoolAttributes from "../interface/school.interfaces";


async function createSchool(payload: SchoolAttributes): Promise<School> {

  payload.institutionID = parseInt(Date.now().toString().split('').splice(7,6).join(''))
  return await School.create({ ...payload });
}

// get all School
async function getAllSchool(): Promise<School[]> {
  return await School.findAll();
}

// get School by id
async function getSchoolByID(id: number): Promise<School | null> {
  

  let school =  await School.findByPk(id);

  return school;
}

// delete School by id
async function deleteSchoolByID(id: number): Promise<string> {
  const school = await getSchoolByID(id);
  if (!school) {
    return "School not found";
  }
  await School.destroy();
  return "School deleted!";
}

// update School by id
async function updateSchool(
  id: number,
  payload: SchoolAttributes
): Promise<School | string> {
  const school = await getSchoolByID(id);
  if (!school) {
    return "School is not found";
  }
  return school.update({ ...payload });
}

export { createSchool, getAllSchool, getSchoolByID, deleteSchoolByID, updateSchool };
