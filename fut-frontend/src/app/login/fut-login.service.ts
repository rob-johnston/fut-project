import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FutLoginService {

  constructor(private http: Http  ) {

  }

  login(values){
    console.log("in the login services login method");
    return this.http.get('http://localhost:3000/login?email='+values.email + '&password=' + values.password + '&code='+values.code)
      .map(res => res.json());
  }


}
