import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Security } from './security';
import { Bankcasumer } from './bankcasumer';
import { Newaccount } from './newaccount';
import { Credit } from './credit';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:8080/jwt/'
  url='http://localhost:3000'

  userpost(suere:Security):Observable<Security>{
    return this.http.post<Security>(`${this.baseUrl}addUser`,suere);
  }
  bankcusmer(bank:Bankcasumer):Observable<Bankcasumer>{
    return this.http.post<Bankcasumer>(`${this.url}/addbankdetails`,bank)
  }
  getAll(bank:Security):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}authenticate`,bank,{responseType:'text'as 'json'})
  }
  getById(id:number):Observable<Bankcasumer>{
    return this.http.get<Bankcasumer>(`${this.url}/getById/${id}`)
  }
  newpost(newaccounts:Newaccount):Observable<Newaccount>{
    return this.http.post<Newaccount>(`${this.baseUrl}newaccount`,newaccounts)
  }
  getbyname(name:string|undefined):Observable<Security>{
    return this.http.get<Security>(`${this.baseUrl}getUser/${name}`)
  }
  getbyall(){
    return this.http.get<Bankcasumer[]>(`${this.url}/getbyall`)
  }
  deletebyid(id:number):Observable<Bankcasumer>{
    return this.http.delete<Bankcasumer>(`${this.url}/delete/${id}`)
  }
  creditcard(credit:Credit):Observable<Credit>{
    return this.http.post<Credit>(`${this.baseUrl}credit`,credit)
  }

}

