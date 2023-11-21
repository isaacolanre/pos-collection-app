import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import SchoolAttributes from "../interface/school.interfaces";
interface SchoolCreationAttributes
  extends Optional<SchoolAttributes, "institutionID"> {}

class School
  extends Model<SchoolAttributes, SchoolCreationAttributes>
  implements SchoolAttributes
{
  public schoolID!: number;
  public institutionID!: number;
  public institutionName!: string;
  public institutionLogo!: string;
  public tID!: string;
  public message!: string;
  public createdAt!: string;
  public updatedAt!: string;
}

School.init(
  {
    institutionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    institutionName: {
      type: DataTypes.STRING, // Change to STRING
      allowNull: false,
    },
    institutionLogo: {
      type: DataTypes.STRING, // Change to STRING
      defaultValue:
        "https://static.vecteezy.com/system/resources/previews/004/641/880/non_2x/illustration-of-high-school-building-school-building-free-vector.jpg",
    },
    tID: {
      type: DataTypes.STRING, // Change to STRING
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING, // Change to STRING
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Schools",
  }
);

interface InstitutionDataAttributes extends Optional<any, "RRN"> {}

export class InstitutionData extends Model<any, InstitutionDataAttributes> {
  public accountType!: boolean;
  public amount!: boolean;
  public email!: boolean;
  public examinations!: boolean;
  public institutionID!: number;
  public institutionName!: boolean;
  public level!: boolean;
  public paymentPeriod!: boolean;
  public paymentPurpose!: boolean;
  public phoneNumber!: boolean;
  public studentClass!: boolean;
  public studentFullName!: boolean;
  public studentRegistrationNumber!: boolean;
  public academicSession!: boolean;
  public school!: boolean;
  public department!: boolean;
  public tid!: boolean;
}

InstitutionData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    accountType: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    amount: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    email: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    examinations: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    institutionName: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    level: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    paymentPeriod: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    paymentPurpose: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    phoneNumber: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    studentClass: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    studentFullName: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    studentRegistrationNumber: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    academicSession: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    school: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    department: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    institutionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "InstitutionData_models",
  }
);

School.hasOne(InstitutionData, {
  foreignKey: "institutionID",
  as: "InstitutionData_models",
});

InstitutionData.belongsTo(School, {
  foreignKey: "institutionID",
  as: "Schools",
});

export default School;
