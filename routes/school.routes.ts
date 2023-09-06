import express from "express";
import * as schoolController from "../controller/SchoolController";

const router = express.Router();

router.post("/create-user", schoolController.createSchool);
router.get("/get-all-users", schoolController.getAllSchools);
router.get("/get-user-by-id", schoolController.getSchoolByID);
router.delete("/delete-user-by-id/:id", schoolController.deleteSchoolByID);
router.patch("/update-user-by-id/:id", schoolController.updateSchool);

export default router;
