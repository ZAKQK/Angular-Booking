import { Component, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '../../../../node_modules/@angular/forms';
import { EventEmitter } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-book-page-component',
  templateUrl: './book-page-component.component.html',
  styleUrls: ['./book-page-component.component.css']
})
export class BookPageComponentComponent implements OnInit {

  userForm: FormGroup;

  name = value.name;
  surname = value.surname;
  email = value.email;
  phone = value.phone;
  travel = value.travel;
  booking = value.booking;
  gender = value.gender;

  // @Output() messageEvent = new EventEmitter<string>();

  constructor(public formBuilder: FormBuilder) {

    

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['Zak', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      travel: ['', [Validators.required]],
      people: ['', [Validators.required]],
      check_in: ['', [Validators.required]],
      check_out: ['', [Validators.required]],
      room: ['', [Validators.required]],
      children: ['', [Validators.required]],
      booking: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
  }
  onSubmit() {
    console.log("USER FORM: ",this.userForm.value.name);
    value.name = this.userForm.value.name;
    value.surname = this.userForm.value.surname;
    value.email = this.userForm.value.email;
    value.phone = this.userForm.value.phone;
    value.travel = this.userForm.value.travel;
    value.booking = this.userForm.value.booking;
    value.gender = this.userForm.value.gender;
    value.check_in = this.userForm.value.check_in;
    value.check_out = this.userForm.value.check_out;
    value.people = this.userForm.value.people;
    value.room = this.userForm.value.room;
    value.children = this.userForm.value.children;

    if(this.userForm.value.room === '1 Room'){
      value.price = '500'
      var x = "32";
      var y = +x;
      console.log('AMOUNt: ', y);
    } 
     else if(this.userForm.value.room === '2 Rooms'){
      value.price = '1000'
    } else if(this.userForm.value.room === '3 Rooms'){
      value.price = '1500'
      console.log('AMOUNt PRICE: '+ value.price);
    }
    console.log("USER FORM: ", value);
    // this.messageEvent.emit(this.userForm.value);
  }
}

export const value = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  travel: '',
  booking: '',
  gender: '',
  check_in: '',
  check_out: '',
  children: '',
  people: '',
  room: '',
  price:''
};
