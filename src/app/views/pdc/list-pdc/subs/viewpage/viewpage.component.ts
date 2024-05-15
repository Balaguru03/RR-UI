import { Component } from '@angular/core';
import { PDCService } from 'src/app/services/pdc.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http';
import { CardComponent, CardBodyComponent, CardHeaderComponent } from '@coreui/angular'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewpage',
  standalone: true,
  providers:[PDCService],
  imports: [HttpClientModule, CardComponent, CardBodyComponent, CardHeaderComponent],
  templateUrl: './viewpage.component.html',
  styleUrl: './viewpage.component.scss'
})
export class ViewpageComponent {
  dataSource: MatTableDataSource<any>;
  pdcData = []
constructor(public PDCservice:PDCService, public dialogRef: MatDialogRef<ViewpageComponent>, private route: ActivatedRoute,){
  this.dataSource = new MatTableDataSource<any>([])
}
ngOnInit(){
  this.getPdcData()
}
viewValue=[]
async getPdcData(){
  await this.PDCservice.getPDCList().then((response:any)=>{
        this.viewValue = response["data"]
      console.log(this.viewValue)
   })

  //  this.dataSource = new MatTableDataSource<any>(this.pdcData);
 }
// close() {
//   this.dialogRef.close();
// }
}
