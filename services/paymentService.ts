import { UniqueConstraintError, Op } from 'sequelize';
import Payment from '../model/Payment';
import PaymentAttributes from '../interface/payment.interfaces';

async function createPayment(
  payload: PaymentAttributes
): Promise<Payment | any> {
  try {
    const newPayment = await Payment.create({ ...payload });
    // console.log('New Payment:', newPayment.toJSON());
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
async function getAllPayment(
  page: number,
  perPage: number
): Promise<{ payments: Payment[]; totalItems: number }> {
  const offset = (page - 1) * perPage;
  const { rows: payments, count: totalItems } = await Payment.findAndCountAll({
    offset,
    limit: perPage,
  });

  return { payments, totalItems };
}
// get all payment for a school
// get all payment for a school
async function getAllSchoolPayment(
  id: number | string,
  eod: string,
  page: number,
  perPage: number
): Promise<{ payments: Payment[]; totalItems: number; institutionLogo: string }> {
  const offset = (page - 1) * perPage;
  let allpayments: Payment[];
  let count: number;
  let institutionLogo: string;
  if (!eod) {
    console.log("here we are"), id;

    // Use '===' for strict equality comparison
    const payment = await Payment.findAndCountAll({
      where: {
        "institutionData.institutionID": id,
      },
      offset,
      limit: perPage,
    });

    allpayments = payment.rows;
    institutionLogo = payment.rows[0].institutionData.institutionLogo;
    count = payment.count;
  } else {
    const payment = await Payment.findAndCountAll({
      where: {
        "institutionData.institutionID": id,
        createdAt: {
          [Op.between]: [`${eod} 00:00:00`, `${eod} 23:59:59`],
        },
      },
      offset,
      limit: perPage,
    });
    allpayments = payment.rows;
    institutionLogo = payment.rows[0].institutionData.institutionLogo;
    count = payment.count;
  }
  return { payments: allpayments, totalItems: count, institutionLogo: institutionLogo };
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
    return 'User not found';
  }
  await payment.destroy();
  return 'User deleted!';
}

// update user by id
async function updatePayment(
  id: number,
  payload: PaymentAttributes
): Promise<Payment | string> {
  const user = await getPaymentByID(id);
  if (!user) {
    return 'User is not found';
  }
  return user.update({ ...payload });
}

// async function fetchTableStructure(): Promise<any> {
//   const response = await Payment.describe();
//   const result = response["institutionData"]

//   return result;
// }



async function fetchTableStructure(): Promise<any> {
  try {
    const tableStructure = await Payment.describe();

    const formattedStructure = Object.entries(tableStructure).map(
      ([columnName, columnType]) => {
        let type: string | Record<string, string> = "unknown";

        // Check if the column type is 'jsonb' and assign the nested interface
        if (columnType.type === "JSONB" && columnName === "institutionData") {
          type = {
            accountType: "string",
            amount: "string",
            email: "string",
            examinations: "string",
            institutionID: "string",
            institutionName: "string",
            level: "string",
            paymentPeriod: "string",
            paymentPurpose: "string",
            phoneNumber: "string",
            studentClass: "string",
            studentFullName: "string",
            studentRegistrationNumber: "string",
            academicSession: "string",
            school: "string",
            department: "string",
            tid: "string",
          };
        } else {
          // Otherwise, just assign the column type
          type = columnType.type as string; // Assuming columnType.type is a string
        }

        return { [columnName]: type };
      }
    );

    console.log(formattedStructure);
    return formattedStructure[7];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export {
  createPayment,
  getAllPayment,
  getPaymentByID,
  deletePaymentByID,
  updatePayment,
  getAllSchoolPayment,
  fetchTableStructure,
};
