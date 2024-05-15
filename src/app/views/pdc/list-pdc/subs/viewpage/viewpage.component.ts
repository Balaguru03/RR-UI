import { Component, Inject } from '@angular/core';
import { PDCService } from 'src/app/services/pdc.service';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http';
import { CardComponent, CardBodyComponent, CardHeaderComponent } from '@coreui/angular'
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewpage',
  standalone: true,
  providers: [PDCService],
  imports: [HttpClientModule, CardComponent, CardBodyComponent, CardHeaderComponent, CommonModule],
  templateUrl: './viewpage.component.html',
  styleUrl: './viewpage.component.scss'
})
export class ViewpageComponent {
  pdcData = []
  constructor(public PDCservice: PDCService, public dialogRef: MatDialogRef<ViewpageComponent>, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public viewData: any) {
    
  }
  ngOnInit() {
    this.getPdcData()
  }
  viewValue: any = []
  getPdcData() {
    this.viewValue = this.viewData;

    //  this.dataSource = new MatTableDataSource<any>(this.pdcData);
  }
  // close() {
  //   this.dialogRef.close();
  // }
}
