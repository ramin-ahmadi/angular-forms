import { Person } from './../data-model/person.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  postUserDetails(person: Person): Observable<Person>{
    // return this.http.post<Person>('ApiUrl', person)
    return of(person)
  }
}
