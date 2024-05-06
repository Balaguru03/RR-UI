import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import {PDC} from '../../../interfaces/pdc.form'
import {PDCService} from "../../../services/pdc.service"
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-and-update',
  standalone: true,
  providers:[provideNativeDateAdapter(),PDCService],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, MatFormFieldModule, MatInputModule,MatDatepickerModule,FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './create-and-update.component.html',
  styleUrl: './create-and-update.component.scss'
})
export class CreateAndUpdateComponent implements OnInit {

  preDcBillsForm!: FormBuilder | any;

  SI_No = 1;

  constructor(private formBuilder: FormBuilder,private PDCservice:PDCService) {
  }

  ngOnInit() {
    this.createFormBuilder()
  }

  createFormBuilder() {
    this.preDcBillsForm = this.formBuilder.group({
      productDetails: new FormArray([
        this.getproductDetails()
      ]),
      "DC_No": new FormControl("", Validators.required),
      "DCDate": new FormControl(new Date(), Validators.required),
      "Status":new FormControl("Pending"),
      "company":this.formBuilder.group({
        "CompanyName" : new FormControl("",Validators.required),
        "AddressLine1" : new FormControl(""),
        "AddressLine2" : new FormControl(""),
        "State" : new FormControl("",Validators.required),
        "City" : new FormControl("",Validators.required),
        "Pincode" : new FormControl("",Validators.required)
      }),
    })
  }

  private getproductDetails() {
    return this.formBuilder.group({
      "SI_NO": new FormControl(this.SI_No),
      "Item_Description": new FormControl("", Validators.required),
      "Grade": new FormControl("", Validators.required),
      "HeatNumber": new FormControl("", Validators.required),
      "Quantity": new FormControl(0),
    });
  }

  onAddProduct() {
    this.SI_No++;
    const control = <FormArray>this.preDcBillsForm.controls['productDetails'];
    control.push(this.getproductDetails());    
  }

  removeProduct(i: number) {
    const control = <FormArray>this.preDcBillsForm.controls['productDetails'];
    control.removeAt(i);
  }
  
  onSubmitPDC(){
    this.PDCservice.createPDC(this.preDcBillsForm.getRawValue()).then(res=>{
      console.log(res)
    })
  }
}
