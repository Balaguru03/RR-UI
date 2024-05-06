import { Injectable } from '@angular/core';
import { apiEnvironments } from '../../api-environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PDCService extends apiEnvironments{
   
  constructor(public httpService:HttpClient) {
    super();
  }

  createPDC(PDCrecord:FormGroup){
    return this.httpService.post(`${this.api_url}/PDC`,PDCrecord).toPromise()
  }

  getPDCList(){
    return this.httpService.get(`${this.api_url}/PDC/getAll`).toPromise()
  }
}
