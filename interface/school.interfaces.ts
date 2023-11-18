import institutionMenuAttributes from "./institutionMenu.interfaces";

interface SchoolAttributes {
  institutionID?: number;
  institutionLogo: string;
  institutionName: string;
  tID: string;
  message: string;
  institutionMenu: institutionMenuAttributes;
}

export default SchoolAttributes;
