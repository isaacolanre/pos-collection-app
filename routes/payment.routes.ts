import express from "express";
import {createPayment, getAllPayment, getPaymentByID, deletePaymentByID, updatePayment} from "../controller/PaymentController"
import Auth from '../middleWare/auth'
const router = express.Router();

router.use(Auth)
router.post("/create-payment", createPayment);
router.get("/get-all-payments", getAllPayment);
router.post("/get-payment-by-id", getPaymentByID);
router.delete("/delete-payment-by-id/:id", deletePaymentByID);
router.patch("/update-payment-by-id/:id", updatePayment);

export default router;
