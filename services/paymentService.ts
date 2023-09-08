import { Model, DataTypes, UniqueConstraintError } from "sequelize";
import bcrypt from "bcrypt";
import Payment from "../model/Payment";
import PaymentAttributes from "../interface/payment.interfaces";

async function createPayment(payload: PaymentAttributes): Promise<Payment | any> {
  try {
    const newPayment = await Payment.create({ ...payload });
    console.log('New Payment:', newPayment.toJSON());
    return newPayment;
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      
      throw new Error('Unique key constraint violated:');
    } else {
      return { error: 'Payment creation failed' };
    }
  }
}
// get all users
async function getAllPayment(page: number, perPage: number): Promise<{ payments: Payment[]; totalItems: number }> {
  const offset = (page - 1) * perPage;
  const { rows: payments, count: totalItems } = await Payment.findAndCountAll({
    offset,
    limit: perPage,
  });
  return { payments, totalItems };
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
