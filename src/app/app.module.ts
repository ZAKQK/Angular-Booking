import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { BookPageComponentComponent } from './page/book-page-component/book-page-component.component';
import { PrevBookingsComponentComponent } from './page/prev-bookings-component/prev-bookings-component.component';
import { FinishPageComponentComponent } from './page/finish-page-component/finish-page-component.component';
import { DatePipe } from '../../node_modules/@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BookPageComponentComponent,
    PrevBookingsComponentComponent,
    FinishPageComponentComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: BookPageComponentComponent},
      {path: 'finish', component: FinishPageComponentComponent},
      {path: 'prev-bookings', component: PrevBookingsComponentComponent},
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
