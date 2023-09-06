import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import School from "../model/School";
import SchoolAttributes from "../interface/school.interfaces";


async function createSchool(payload: SchoolAttributes): Promise<School> {
  // const hashedPassword = await bcrypt.hash(payload.password, 10);
  // payload.password = hashedPassword;
  return await School.create({ ...payload });
}

// get all School
async function getAllSchool(): Promise<School[]> {
  return await School.findAll();
}

// get School by id
async function getSchoolByID(id: number): Promise<School | null> {
  console.log(id);
  return await School.findByPk(id);
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
