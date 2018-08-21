import { Component, OnInit } from '@angular/core';
import { value } from '../book-page-component/book-page-component.component';

@Component({
  selector: 'app-prev-bookings-component',
  templateUrl: './prev-bookings-component.component.html',
  styleUrls: ['./prev-bookings-component.component.css']
})
export class PrevBookingsComponentComponent implements OnInit {

  start_day
  end_day

  constructor() { 
    this.start_day = value.check_in;
    this.end_day = value.check_out;
  }

  ngOnInit() {
  }

}
