import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    getProducts(){
      return [
        {
          "id":1,
          "name": "watch",
          "brand": "Timex",
          "price":  7000
        },
        {
          "id":32,
          "name": "cycle",
          "brand": "DCycle",
          "price":  9000
        },
        {
          "id":1345,
          "name": "laptop",
          "brand": "Lenovo",
          "price":  45454
        }
       ]
    }
  constructor() { }
}
