import { Injectable } from "@angular/core";
import { IEmployee } from "src/app/model/employee-interface/employee.interface";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{
    Employee:IEmployee[] = [
        {ecode:1, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:2, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:3, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:4, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:5, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:6, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:7, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:8, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:9, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null},
        {ecode:10, firstName:"Ayush", middleName:"Kumar", lastName:"Singh", email:"ayush@gmail.com", contact:8077120489, gender:"Male", DOB:31072022, userType:"Permanent", address:"Agra", pincode:282005, actions:null}
    ]

    getEmployeeList(){
        return this.Employee;
    }

    getEmployeeDetails(code:number){
        return this.Employee.find(e => e.ecode=== code)!;
    }
}