import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { FormCheckComponent, FormCheckInputDirective } from '@coreui/angular';

@Component({
  selector: 'app-create-and-update',
  standalone: true,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormCheckInputDirective,
    FormCheckComponent
  ],
  templateUrl: './create-and-update.component.html',
  styleUrl: './create-and-update.component.scss'
})
export class CreateAndUpdateComponent {

  FinalDcBillsForm!: FormBuilder | any;
  BillingForm !: FormBuilder | any;

  SI_No = 1;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createFormBuilder()
    for(var i=0;i<=3;i++){
      this.onAddProduct();
    }
  }

  createFormBuilder() {
    this.FinalDcBillsForm = this.formBuilder.group({
      productDetails: new FormArray([
        this.getproductDetails()
      ]),
      "DC_No": new FormControl("", Validators.required),
      "DCDate": new FormControl(Date.now(), Validators.required),
      "YourDCNo": new FormControl("", Validators.required),
      "CompanyName" : new FormControl("",Validators.required)
    })
    this.BillingForm = this.formBuilder.group({
      secondCtrl : new FormControl("")
    })
  }

  
  private getproductDetails() {
    return this.formBuilder.group({
      "ItemNeeded" : new FormControl(false),
      "SI_NO": new FormControl(this.SI_No),
      "Item_Description": new FormControl("", Validators.required),
      "Grade": new FormControl("", Validators.required),
      "HeatNumber": new FormControl("", Validators.required),
      "Quantity": new FormControl(0),
    });
  }

  onAddProduct() {
    this.SI_No++;
    const control = <FormArray>this.FinalDcBillsForm.controls['productDetails'];
    control.push(this.getproductDetails());    
  }

}
