import express from 'express';
import {
  createPayment,
  getAllPayment,
  getPaymentByID,
  deletePaymentByID,
  updatePayment,
  getAllPaymentForASchool,
} from '../controller/PaymentController';
import Auth from '../middleWare/auth';
const router = express.Router();

router.use(Auth);
router.post('/create-payment', createPayment);
router.get('/get-all-payments', getAllPayment);
router.post('/get-payment-by-id', getPaymentByID);
router.get('/get-payment-by-institution-id/:id', getAllPaymentForASchool);
router.delete('/delete-payment-by-id/:id', deletePaymentByID);
router.patch('/update-payment-by-id/:id', updatePayment);

export default router;
