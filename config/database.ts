import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_STORAGE, DB_URL, DB_URI } = process.env;

if (!DB_STORAGE || !DB_URL || !DB_URI) {
  throw new Error(
    "Missing required environment variables for database configuration."
  );
}

const sequelize = new Sequelize(DB_URI, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export default sequelize;
