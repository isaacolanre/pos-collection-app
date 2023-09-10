import { DataTypes, Model, Optional } from 'sequelize';
import institutionDataAttributes from '../interface/institutionData.interfaces';
import sequelize from '../config/database';
import PaymentAttributes from '../interface/payment.interfaces';

interface PaymentCreationAttributes
  extends Optional<PaymentAttributes, 'RRN'> {}

class Payment
  extends Model<PaymentAttributes, PaymentCreationAttributes>
  implements PaymentAttributes
{
  public transID!: string;
  public RRN!: string;
  public STAN!: string;
  public acquiringInstitutionIdCode!: string;
  public cardCardSequenceNum!: string;
  public cardExpireData!: string;
  public forwardingInstCode!: string;
  public institutionData!: institutionDataAttributes;
  public pan!: string;
  public pinBlock!: string;
  public receiptNumber!: string;
  public respCode!: string;
  public responseMessage!: string;
  public status!: boolean; // Provide an initializer with a default value
  public successResponse!: string;
  public systemTraceAuditNo!: string;
  public terminalId!: string;
  public transactionDate!: string;
  public transactionDateTime!: string;
  public transactionTime!: string;
  public transactionType!: string;
}

Payment.init(
  {
    transID: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    RRN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    STAN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acquiringInstitutionIdCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardCardSequenceNum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardExpireData: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    forwardingInstCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutionData: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    pan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pinBlock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receiptNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    respCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responseMessage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    successResponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    systemTraceAuditNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminalId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionDateTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Payment_model',
  }
);

export default Payment;
