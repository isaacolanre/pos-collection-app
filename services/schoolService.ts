import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import School from "../model/School";
import SchoolAttributes from "../interface/school.interfaces";


async function createSchool(payload: SchoolAttributes): Promise<School> {
  // console.log(payload.message);
  payload.institutionID = parseInt(Date.now().toString().split('').splice(7,6).join(''))
  return await School.create({ ...payload });

  
}

// get all School
async function getAllSchool(): Promise<School[]> {
  return await School.findAll();
}

// get School by id
//School | null
async function getSchoolByID(id: number): Promise<any> {
  

  let school =  await School.findByPk(id);

  let result = {
    institutionID: school?.institutionID,
    institutionName: school?.institutionName,
    institutionLogo: school?.institutionLogo,
    tID: school?.tID,
    message: school?.message,
    
    institutionMenu: [] as { inputName: string, dataType: string, description: string, value?:string[]}[],
}

// if (school?.institutionMenu.email){
//   result.institutionMenu.push( {
//     inputName: "email",
//     dataType: "string",
//     description: "Please enter email",

// },);
// }
// if (school?.institutionMenu.level){
//   result.institutionMenu.push( {
//     inputName: "level",
//     dataType: "string",
//     description: "Please enter level",
// },);
// }

if (school?.institutionMenu.amount){
  result.institutionMenu.push( {
    inputName: "amount",
    dataType: "number",
    description: "Please enter amount",
},);
}

// if (school?.institutionMenu.school){
//   result.institutionMenu.push( {
//     inputName: "school",
//     dataType: "list",
//     description: "Please select school",
//     value:["Sharia and Civil Law","Islamic and Qur'anic Studies","Secondary Education, Art & Social Sciences","Secondary Education, Languages", "Sciences", "Early Childhood and Primary Education"]
// },);
// }

if (school?.institutionMenu.department){
  result.institutionMenu.push( {
    inputName: "department",
    dataType: "list",
    description: "Please select department",
    value: ["Department of Shari'a and Civil Law", "Department of Law", "Department of Qur'anic Studies", "Department of Hadith","Department of Islamic Studies","Department of Economic", "Department of History", "Department of Geography", "Department of Social Studies", "Department of Political Science","Department of Arabic Medium","Department of Arabic","Department of English","Department of Hausa","Department of Computer Sciences ","Department of Physical and Health Education" ]
},);
}
// if (school?.institutionMenu.accountType){
//   result.institutionMenu.push( {
//     inputName: "accountType",
//     dataType: "string",
//     description: "Please enter account type",
// },);
// }

if (school?.institutionMenu.phoneNumber){
  result.institutionMenu.push( {
    inputName: "phoneNumber",
    dataType: "number",
    description: "Please enter phone number",
},);
}if (school?.institutionMenu.examinations){
  result.institutionMenu.push( {
    inputName: "examinations",
    dataType: "string",
    description: "Please enter examination",
},);
}

// if (school?.institutionMenu.studentClass){
//   result.institutionMenu.push( {
//     inputName: "studentClass",
//     dataType: "string",
//     description: "Please enter student class ",
// },);
// }
// if (school?.institutionMenu.institutionID){
//   result.institutionMenu.push( {
//     inputName: "institutionID",
//     dataType: "string",
//     description: "Please enter Institution ID",
// },);
// }
// if (school?.institutionMenu.paymentPeriod){
//   result.institutionMenu.push( {
//     inputName: "paymentPeriod",
//     dataType: "string",
//     description: "Please enter payment period",
// },);
// }

if (school?.institutionMenu.paymentPurpose){
  result.institutionMenu.push( {
    inputName: "paymentPurpose",
    dataType: "list",
    description: "Please select purpose of payment",
    value: ["clearance", "Transcript", "Acceptance fee","Bye Law", "Reissuance of Result",  "Departmental", "Medicals"]
},);
}
// if (school?.institutionMenu.academicSession){
//   result.institutionMenu.push( {
//     inputName: "academicSession",
//     dataType: "string",
//     description: "Please enter academic session",
// },);
// }if (school?.institutionMenu.institutionName){
//   result.institutionMenu.push( {
//     inputName: "institutionName",
//     dataType: "string",
//     description: "Please enter instituition name",
// },);
// }if (school?.institutionMenu.studentFullName){
//   result.institutionMenu.push( {
//     inputName: "studentFullName",
//     dataType: "string",
//     description: "Please enter your name",
// },);
// }if (school?.institutionMenu.studentRegistrationNumber){
//   result.institutionMenu.push( {
//     inputName: "studentRegistrationNumber",
//     dataType: "string",
//     description: "Please enter registration Number",
// },);
// }





  // console.log(school?.institutionMenu);
  return result;
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
