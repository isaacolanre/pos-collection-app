import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import Payment from "../model/Payment";
import PaymentAttributes from "../interface/payment.interfaces";

async function createPayment(payload: PaymentAttributes): Promise<Payment> {
  // const hashedPassword = await bcrypt.hash(payload.password, 10);
  // payload.password = hashedPassword;
  return await Payment.create({ ...payload });
}

// get all users
async function getAllPayment(): Promise<Payment[]> {
  return await Payment.findAll();
}

// get user by id
async function getPaymentByID(id: number): Promise<Payment | null> {
  // console.log(id,19);
  return await Payment.findByPk(id);
}

// delete Payment by id
async function deletePaymentByID(id: number): Promise<string> {
  const payment = await getPaymentByID(id);
  if (!payment) {
    return "User not found";
  }
  await payment.destroy();
  return "User deleted!";
}

// update user by id
async function updatePayment(
  id: number,
  payload: PaymentAttributes
): Promise<Payment | string> {
  const user = await getPaymentByID(id);
  if (!user) {
    return "User is not found";
  }
  return user.update({ ...payload });
}

export { createPayment, getAllPayment, getPaymentByID, deletePaymentByID, updatePayment };
