// import { DataTypes, Model, Optional } from "sequelize";
// import sequelize from "../config/database";
// import institutionDataAttributes from "../interface/institutionData.interfaces";

// import School from "./School";

// class InstitutionData
//   extends Model<institutionDataAttributes>
//   implements institutionDataAttributes
// {
//   public accountType!: string;
//   public amount!: string;
//   public email!: string;
//   public examinations!: string;
//   public institutionID!: string;
//   public institutionName!: string;
//   public level!: string;
//   public paymentPeriod!: string;
//   public paymentPurpose!: string;
//   public phoneNumber!: string;
//   public studentClass!: string;
//   public studentFullName!: string;
//   public studentRegistrationNumber!: string;
//   public academicSession!: string;
//   public school!: string;
//   public department!: string;
//   public tid!: string;
// }

// InstitutionData.init(
//   {
//     accountType: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     amount: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     examinations: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     institutionID: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     institutionName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     level: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     paymentPeriod: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     paymentPurpose: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phoneNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     studentClass: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     studentFullName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     studentRegistrationNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     academicSession: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     school: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     department: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     tid: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: "InstitutionData_model",
//   }
// );

// InstitutionData.belongsTo(School, {
//   foreignKey: "institutionID",
//   targetKey: "institutionID",
// });
// export default InstitutionData;
