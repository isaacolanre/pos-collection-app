import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import SchoolAttributes from "../interface/school.interfaces";

interface SchoolCreationAttributes extends Optional<SchoolAttributes, "institutionID"> {}

class School
  extends Model<SchoolAttributes, SchoolCreationAttributes>
  implements SchoolAttributes
{
  public institutionID!: number;
  public institutionName!: string;
  public tID!: string;
  public message!: string;
}

School.init(
  {
    institutionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    institutionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "School_model",
  }
);

export default School;
