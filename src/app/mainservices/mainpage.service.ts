import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { Observable , BehaviorSubject } from 'rxjs';
import { Result } from '../response.model';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  behaviourSubject:any = new BehaviorSubject(null) ;
  constructor(public http:HttpClient) { }


  getUser()
  {
    let url = "https://jsonplaceholder.typicode.com/users";
   return this.http.get(url);
    }
  }



