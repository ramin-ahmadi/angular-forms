import { Component, OnInit } from '@angular/core';
import { Person } from '../data-model/person.model';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  constructor() { }

  person: Person = new Person();
  ages: number[] = [];

  ngOnInit() {
    this.person.firstName = 'Ramin';
    this.person.lastName = 'Ahmadi';
    this.person.age = 30;
    this.person.gender = 'Male';
    this.person.Address = 'Melbourne';
    this.person.consented = false;
    // populating age array with 1 to 100
    this.ages = Array(100).fill(1).map((e,i)=>i+1);
  }

  onDetailsFormSubmit(){
    alert(JSON.stringify(this.person))
  }
}
