import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Result } from 'src/app/response.model';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SubServiceService {

  constructor(private service: DataService) { }


  //Login start
  getAllaccount(): Observable<Result> {
    let url = "/AccountManager/GetAllAccount";
       // console.log(JSON.stringify(loginRequestModel));
    return this.service.get(url).pipe<Result>(tap ((response:any) =>{
      return response;
    }))
  };
  //Login end


}
