import { Person } from './../data-model/person.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserDetails(person: Person){}
}
