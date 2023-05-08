import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  getPlayers(){
    return this.httpClient.get("http://demo5338466.mockable.io/getPlayers");
  }

  constructor(private httpClient: HttpClient) { }
}
