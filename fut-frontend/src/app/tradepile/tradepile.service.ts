import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TradepileService {

  constructor(private http: Http) { }


  getTradePile(){
    return this.http.get('http://localhost:3000/gettradepile')
      .map(res => res.json());
  }

  gatherExtraInfoForPlayer(id){
    return this.http.get('http://localhost:3000/playerinfo?id=' + id)
      .map(res => res.json());
  }

}


