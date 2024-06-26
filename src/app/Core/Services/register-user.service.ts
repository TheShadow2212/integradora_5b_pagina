import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string): Observable<any> {
    const url = 'http://18.222.122.162/api/user/register';

    return this.http.post<any>(url, { name, email, password });
  }
}
