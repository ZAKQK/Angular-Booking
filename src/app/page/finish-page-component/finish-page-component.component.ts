import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '../../../../node_modules/@angular/forms';
import { DatePipe } from '@angular/common';
import * as moment from 'moment/moment.js';
import { value } from '../book-page-component/book-page-component.component';

@Component({
  selector: 'app-finish-page-component',
  templateUrl: './finish-page-component.component.html',
  styleUrls: ['./finish-page-component.component.css']
})
export class FinishPageComponentComponent implements OnInit {

  userForm: FormGroup;

  name: string;
  surname: string;
  email: string;
  phone: string;
  gender: string;
  travel: string;
  booking: string;
  check_in: string;
  check_out: string;
  people: string;
  room: string;
  children
  price
  amount: number = 0;
  tax
  total
  final_price
  number_of_days

  month
  year
  card_number
  card_ccv

  constructor(public formBuilder: FormBuilder) {
    this.name = value.name;
    this.surname = value.surname;
    this.email = value.email;
    this.phone = value.phone;
    this.gender = value.gender;
    this.travel = value.travel;
    this.booking = value.booking;
    this.check_in = value.check_in;
    this.check_out = value.check_out;
    this.people = value.people;
    this.room = value.room;
    this.children = value.children;
    this.price = value.price;

    console.log("Price: ", this.tax)

    this.final_price 

    var d = new Date(Date.parse(this.check_in));
    var d2 = new Date(Date.parse(this.check_out));

    let date = new Date(this.check_in)

    var a = moment([d.getFullYear(), d.getMonth(), d.getDate()]);
    var b = moment([d2.getFullYear(), d2.getMonth(), d2.getDate()]);

    this.number_of_days = b.diff(a, 'days')
    console.log("Differece: ", this.number_of_days);  
    
    this.final_price = this.number_of_days * this.price;
    console.log('Price: ', this.final_price);

    this.tax = this.final_price * 0.15;

    this.total = this.tax + this.final_price;

    console.log('PRIC: ' + this.tax)

    this.amount = Number.parseInt(this.tax) + Number.parseInt(this.price);
    console.log(this.amount);

    this.userForm = formBuilder.group({
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      card_number: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      card_ccv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
    console.log();
  }

  ngOnInit() {
    console.log(value.name);
  }
  onSubmit() {
    console.log(this.userForm.value);
    card_values.month = this.userForm.value.month;
    card_values.year = this.userForm.value.year;
    card_values.card_number = this.userForm.value.card_number;
    card_values.card_ccv = this.userForm.value.card_ccv;
  }

  datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
}

export const card_values = {
  month: '',
  year: '',
  card_number: '',
  card_ccv: '',
}
