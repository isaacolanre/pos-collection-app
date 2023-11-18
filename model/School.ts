import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import SchoolAttributes from "../interface/school.interfaces";
import institutionMenuAttributes from "../interface/institutionMenu.interfaces";

interface SchoolCreationAttributes extends Optional<SchoolAttributes, "institutionID"> {}

class School
  extends Model<SchoolAttributes, SchoolCreationAttributes>
  implements SchoolAttributes
{
  public institutionID!: number;
  public institutionName!: string;
  public institutionLogo!: string;
  public tID!: string;
  public message!: string;
  public institutionMenu!: institutionMenuAttributes;
  

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
    institutionLogo: {
      type: DataTypes.STRING,
      defaultValue: "https://static.vecteezy.com/system/resources/previews/004/641/880/non_2x/illustration-of-high-school-building-school-building-free-vector.jpg", 
    },
    tID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutionMenu: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "School_model",
  }
);

export default School;
