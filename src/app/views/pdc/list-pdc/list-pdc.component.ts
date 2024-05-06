import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RowComponent, ColComponent, CardComponent, CardBodyComponent, CardHeaderComponent } from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { PDCService } from 'src/app/services/pdc.service';
import { HttpClientModule } from '@angular/common/http';


export interface PDCData {
  _id: string;
  DC_No: string;
  Status: string;
  Company_Name:string;
}

@Component({
  selector: 'app-list-pdc',
  standalone: true,
  providers:[PDCService],
  imports: [RowComponent, ColComponent,CardComponent,CardHeaderComponent, CardBodyComponent,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,RouterLink,HttpClientModule],
  templateUrl: './list-pdc.component.html',
  styleUrl: './list-pdc.component.scss'
})
export class ListPdcComponent implements OnInit{
  displayedColumns: string[] = ['SNO', 'DC_NO', 'Company_Name','Status', 'Action'];
  dataSource: MatTableDataSource<any>;
  pdcData = []

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private PDCservice:PDCService) {
    // Create 100 users
    
   
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<any>([])
  }
  ngOnInit(){
    this.getPdcData()
  }
  async getPdcData(){
   await this.PDCservice.getPDCList().then((response:any)=>{
      this.pdcData = response.data.map((rest:any)=>{
        return {
          "DC_No":rest['DC_No'],
          "Company_Name":rest.company.CompanyName,
          "Status":rest.Status,
          "_id":rest._id
        }
       })
       console.log(this.pdcData)
    })
    this.dataSource = new MatTableDataSource<any>(this.pdcData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

