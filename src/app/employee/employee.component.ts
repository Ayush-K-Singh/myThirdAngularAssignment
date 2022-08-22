import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee/employee.service';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['ecode', 'name', 'email', 'contact', 'actions'];
  constructor(private _DataList:EmployeeService, protected _router:Router,  public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  dataSource= this._DataList.getEmployeeList();

  openDialogView(e:string) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        // animal: 'unicorn',
        // eemployee: 'aaryan',
        eemployee: e,
      },
    });
    // console.log(e)
  }

  openDialogEdit(e:string) {
    this.dialog.open(DialogDataEditDialog, {
      // data: {
      //   // animal: 'unicorn',
      //   // eemployee: 'aaryan',
      //   eemployee: e,
      // },
    });
    // console.log(e)
  }
  

}


export interface DialogData {
  eemployee: 'Ayush' | 'Aaryan' | 'Amit' | 'Ajay' | 'Deepak';
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  employee = [
    {fName:"Ayush",mName:"Kumar",lName:'Singh',age:20,gender:'Male',DOB:31072022,address1:'up',address2:'Agra'},
    {fName:"amit",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'},
    {fName:"aaryan",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'},
    {fName:"ajay",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'},
    {fName:"Deepak",mName:"kumar",lName:'singh',age:20,gender:'male',DOB:31072022,address1:'up',address2:'agra'}
  ]
}

@Component({
  selector: 'dialog-data-edit-dialog',
  templateUrl: './dialog-data-edit-dialog.html',
})
export class DialogDataEditDialog{
  name = ''
  
}