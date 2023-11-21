import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

interface Vendor {
  id: string,
  name: string,
  menuItems: string,
  phone: string,
  photo: string,
}

@Injectable({
  providedIn: 'root'
})
export class VendorsServiceService {
  BACKEND_URL = environment.url;
  
  constructor(
    private http: HttpClient,
  ) { }

  getVendors() {

  }
}
