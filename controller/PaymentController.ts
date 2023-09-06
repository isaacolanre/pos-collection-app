import { Request, Response } from "express";
import * as paymentService from "../services/paymentService";
import inputValidator from "../interface/payment.interfaces";

export async function createPayment(request: Request, response: Response) {
  const payload = request.body;


  try {
    const newPayment = await paymentService.createPayment(payload);
    
    if (newPayment)
    response.status(201).json({"status": true, "message": "notification push successful"});
  } catch (error: any) {
    response
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
}

export async function getAllPayment(request: Request, response: Response) {
  try {
    const allPayments = await paymentService.getAllPayment();
    response.status(200).json(allPayments);
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getPaymentByID(request: Request, response: Response) {
  const id = request.body.RRN;
console.log(request.body)
  try {
    const user = await paymentService.getPaymentByID(id);
    if (!user) {
      response.status(404).json({ error: "User not found" });
    } else {
      response.status(200).json(user);
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deletePaymentByID(request: Request, response: Response) {
  const id = +request.params.id;

  try {
    const res = await paymentService.deletePaymentByID(id);
    if (res === "User not found") {
      response.status(404).json({ error: "User not found" });
    } else {
      response.status(202).json({ message: res });
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updatePayment(request: Request, response: Response) {
  const id = +request.params.id;
  const payload = request.body;

  try {
    const updatedUser = await paymentService.updatePayment(id, payload);
    if (updatedUser === "User is not found") {
      response.status(404).json({ error: "User not found" });
    } else {
      response.status(202).json(updatedUser);
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}
