import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FutInterfaceService {

  constructor(private http: Http) { }

  //different methods will go here, eg

  //relistAll()

  //searchTransferMarket

  //Credits (?)

  getCredits(){
    return this.http.get('http://localhost:3000/getcredits')
      .map(res => res.json());
  }

  getTradePile(){
    return this.http.get('http://localhost:3000/gettradepile')
      .map(res => res.json());
  }

  gatherExtraInfoForPlayer(id){

    return this.http.get('http://localhost:3000/playerinfo?id=' + id)
    .map(res => res.json());
}

}
