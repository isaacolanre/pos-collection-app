import { Request, Response } from 'express';
import * as paymentService from '../services/paymentService';
import inputValidator from '../interface/payment.interfaces';

export async function createPayment(request: Request, response: Response) {
  const payload = request.body;

  try {
    const newPayment = await paymentService.createPayment(payload);

    if (newPayment)
      response
        .status(201)
        .json({ status: true, message: 'notification push successful' });
  } catch (error: any) {
    response
      .status(400)
      .json({ error: 'Payment creation error', message: error.message });
  }
}

export async function getAllPayment(
  request: Request | any,
  response: Response
) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = 30;
    const offset = page > 1 ? (page - 1) * perPage : 1;

    // console.log(offset, perPage);

    const allPayments = await paymentService.getAllPayment(offset, perPage);
    // console.log(allPayments.payments);

    response.status(200).json(allPayments);
  } catch (error: any) {
    response
      .status(500)
      .json({ error: 'Internal Server Error', message: error.message });
  }
}

export async function getAllPaymentForASchool(
  request: Request | any,
  response: Response
) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = 30;
    const offset = page > 1 ? (page - 1) * perPage : 1;
    const id = request.params.id;
    const eod: string = request.query.eod || '';

    // eod=2023-09-08

    const allPayments = await paymentService.getAllSchoolPayment(
      id,
      eod,
      offset,
      perPage
    );
    return response.status(200).json(allPayments);
  } catch (error: any) {
    response
      .status(500)
      .json({ error: 'Internal Server Error', message: error.message });
  }
}

export async function getPaymentByID(request: Request, response: Response) {
  const id = request.body.RRN;
  try {
    const user = await paymentService.getPaymentByID(id);
    if (!user) {
      response.status(404).json({ error: 'User not found' });
    } else {
      response.status(200).json(user);
    }
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deletePaymentByID(request: Request, response: Response) {
  const id = +request.params.id;

  try {
    const res = await paymentService.deletePaymentByID(id);
    if (res === 'User not found') {
      response.status(404).json({ error: 'User not found' });
    } else {
      response.status(202).json({ message: res });
    }
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updatePayment(request: Request, response: Response) {
  const id = +request.params.id;
  const payload = request.body;

  try {
    const updatedUser = await paymentService.updatePayment(id, payload);
    if (updatedUser === 'User is not found') {
      response.status(404).json({ error: 'User not found' });
    } else {
      response.status(202).json(updatedUser);
    }
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
