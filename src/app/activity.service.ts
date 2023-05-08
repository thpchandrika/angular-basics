import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService { 

  getActivities(){
    return this.httpClient.get("http://demo5338466.mockable.io/getActivities");
  }

  constructor(private httpClient: HttpClient) { }
}
