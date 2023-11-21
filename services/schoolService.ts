import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import School, { InstitutionData } from "../model/School";
import SchoolAttributes from "../interface/school.interfaces";

async function createSchool(
  payload: SchoolAttributes,
  institutionData: any
  // ): Promise<School> {
): Promise<any> {
  let institutionID = (payload.institutionID = parseInt(
    Date.now().toString().split("").splice(7, 6).join("")
  ));

  let resp = await School.create({ ...payload });
  await InstitutionData.create({
    ...institutionData,
    institutionID: resp.institutionID,
  });
  return resp;
}

// get all School
async function getAllSchool(): Promise<School[]> {
  return await School.findAll();
}

// get School by id
async function getSchoolByID(
  id: number,
  payload: string
): Promise<School | any> {
  try {
    let school;
    if (payload === "") {
      school = await School.findOne({
        where: { institutionID: id },
      });
      return school;
    } else if (payload === "all") {
      school = await School.findOne({
        where: { institutionID: id },

        include: [{ model: InstitutionData, as: "InstitutionData_models" }],
      });

      return school;
    }
  } catch (error) {
    console.error("Error retrieving school by ID:", error);
    return null;
  }
}

// delete School by id
async function deleteSchoolByID(id: number): Promise<string> {
  const school = await getSchoolByID(id, "");
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
  const school = await getSchoolByID(id, "");
  if (!school) {
    return "School is not found";
  }
  return school.update({ ...payload });
}

export {
  createSchool,
  getAllSchool,
  getSchoolByID,
  deleteSchoolByID,
  updateSchool,
};

/*

{
  "institutionID": 85444,
  "institutionName": "PT. PLN (Persero)",
  "institutionLogo": "https://static.vecteezy.com/system/resources/previews/004/641/880/non_2x/illustration-of-high-school-building-school-building-free-vector.jpg",
  "tID": "1234567890",
  "message": "Pembayaran tagihan listrik",
  "createdAt": "2023-11-18T10:58:05.444Z",
  "updatedAt": "2023-11-18T10:58:05.444Z",
  "InstitutionData_models": {
    "id": 3,
    "accountType": true,
    "amount": false,
    "email": true,
    "examinations": false,
    "institutionName": true,
    "level": false,
    "paymentPeriod": true,
    "paymentPurpose": false,
    "phoneNumber": true,
    "studentClass": false,
    "studentFullName": true,
    "studentRegistrationNumber": false,
    "academicSession": true,
    "school": false,
    "department": true,
    "tid": false,
    "institutionID": 85444,
    "createdAt": "2023-11-18T10:58:05.447Z",
    "updatedAt": "2023-11-18T10:58:05.447Z"
  }
}

*/
