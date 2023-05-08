import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  user : User = {
    "id": 843,
    "name": "Chandrika Thapa",
    "email": "thpchandrika@gmail.com",
    "mobile": 4543634646
  } 
}
