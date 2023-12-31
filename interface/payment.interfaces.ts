import institutionDataAttributes from './institutionData.interfaces';

interface PaymentAttributes {
  transID?: string;
  RRN?: string;
  STAN: string;
  acquiringInstitutionIdCode: string;
  cardCardSequenceNum: string;
  cardExpireData: string;
  forwardingInstCode: string;
  institutionData: institutionDataAttributes;
  pan: string;
  pinBlock: string;
  receiptNumber: string;
  respCode: string;
  responseMessage: string;
  status: boolean;
  successResponse: string;
  systemTraceAuditNo: string;
  terminalId: string;
  transactionDate: string;
  transactionDateTime: string;
  transactionTime: string;
  transactionType: string;
  createdAt?: string;
}

export default PaymentAttributes;
