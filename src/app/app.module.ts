import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { UserComponentComponent } from './user-component/user-component.component';
import { BookComponent } from './book/book.component';
import { ActivityComponent } from './activity/activity.component';
import { PlayerComponent } from './player/player.component';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { PayrollComponent } from './payroll/payroll.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserComponent,
    ProductComponent,
    UserComponentComponent,
    BookComponent,
    ActivityComponent,
    PlayerComponent,
    AgePipe,
    FilterPipe,
    PayrollComponent,
    HrhelpdeskComponent,
    ProfileComponent,
    LearningComponent,
    HomeComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
