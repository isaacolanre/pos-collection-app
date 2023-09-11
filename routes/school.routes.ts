import express from "express";
import * as schoolController from "../controller/SchoolController";

const router = express.Router();

router.post("/create-school", schoolController.createSchool);
router.get("/get-all-schools", schoolController.getAllSchools);
router.post("/get-school-by-id", schoolController.getSchoolByID);
router.delete("/delete-school-by-id/:id", schoolController.deleteSchoolByID);
router.patch("/update-school-by-id/:id", schoolController.updateSchool);

router.get("/",(r,s)=>{
    s.json({message:"Welcome to E-Top server!"})
  })
export default router;
