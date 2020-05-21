import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../data-model/person.model';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  constructor( private readonly dataService:DataService) { }

  person: Person = new Person();
  ages: number[] = [];

  ngOnInit() {
    // populating age array with 1 to 100
    this.ages = Array(100).fill(1).map((e,i)=>i+1);
  }

  onDetailsFormSubmit(){
    this.dataService
  .postUserDetails(this.person)
  .subscribe(person => {
    console.log('postUserDetails has been successful:', person)
    });
    error => {
      console.log ('postUserDetails post failed: ', error)
    }
  }


}
