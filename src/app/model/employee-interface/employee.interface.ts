export interface IEmployee{
    ecode:number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    contact: number;
    gender: "Male" | "Female";
    DOB: number;
    userType: "Contractual" | "Permanent";
    address: string;
    pincode: number;
    actions:any;
}