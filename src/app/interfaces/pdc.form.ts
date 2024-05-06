import { FormArray, FormControl, FormGroup } from "@angular/forms"

export interface PDC {
    DC_No: FormControl<string>,
    DCDate: FormControl<Date>,
    YourDCNo:FormControl<string>,
    productDetails:FormArray<FormGroup<ProductDetails>>
}

export interface ProductDetails{
    SI_NO:FormControl<Number>,
    Item_Description:FormControl<string>,
    Grade:FormControl<string>,
    HeatNumber:FormControl<string>,
    Quantity:FormControl<number>
}