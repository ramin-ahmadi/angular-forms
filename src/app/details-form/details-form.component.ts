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
  
  ngOnInit() {
  }

}
