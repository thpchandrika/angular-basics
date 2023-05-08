import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})

export class UserComponentComponent implements OnInit {
   users: any;

  constructor(private http : HttpClient){
      
  }
  ngOnInit(): void {
   let response = this.http.get("https://jsonplaceholder.typicode.com/users");
   response.subscribe((data) => this.users = data);
  }
}
