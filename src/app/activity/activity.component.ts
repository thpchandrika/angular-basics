import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit{
  activities: any;
  message: string = "welcome to chandrika thapa course";
  amount: number = 500;

  constructor(private activityService : ActivityService){
   
  }

  ngOnInit(): void {
   this.activityService.getActivities()
                          .subscribe((data) => this.activities = data);
  }
}
