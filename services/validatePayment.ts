import PaymentAttributes from '../interface/institutionData.interfaces';
import SchoolAttributes from '../interface/school.interfaces';

class PaymentInput implements PaymentAttributes {
  accountType?: string | undefined;
  amount: string;
  email: string;
  examinations?: string | undefined;
  institutionID: string;
  institutionName: string;
  level?: string | undefined;
  paymentPeriod?: string | undefined;
  paymentPurpose?: string | undefined;
  phoneNumber: string;
  studentClass?: string | undefined;
  studentFullName: string;
  studentRegistrationNumber?: string | undefined;
  academicSession?: string | undefined;
  school?: string | undefined;
  department?: string | undefined;
  tid: string;

//   constructor( public amount: string, );
}

function validPaymentInput() {
    /*
    {
        institutionName:"MFL", string
        tid:"gfg12",
        paymentInput:{

        }
    }
    
    [
        {
            inputName: name,
            dataType: string
        },
        {
            inputName: level,
            dataType: list
        }
    ]
    */ 
}
