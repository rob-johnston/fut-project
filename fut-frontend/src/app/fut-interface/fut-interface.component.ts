import { Component, OnInit } from '@angular/core';
import { FutInterfaceService } from './fut-interface.service';
import { Http } from '@angular/http';
import {error} from "util";


@Component({
  selector: 'app-fut-interface',
  templateUrl: './fut-interface.component.html',
  styleUrls: ['./fut-interface.component.css'],
  providers: [FutInterfaceService]
})
export class FutInterfaceComponent implements OnInit {

  data: string;
  futService: FutInterfaceService;
  coins: number;
  tradepile: string;

  constructor( futService : FutInterfaceService, private http: Http) {
    this.futService = futService;
  }

  ngOnInit() {
  }

  getCredits(){
    this.futService.getCredits().subscribe(response =>{
        console.log(response);
        this.data = response;
        this.coins = response.currencies[0].finalFunds;
    });
  }

  getTradePile(){
    this.futService.getTradePile().subscribe(response =>{

      for(var i = 0 ; i < response.auctionInfo.length; i++){
          var id = response.auctionInfo[i].assetId;
          this.futService.gatherExtraInfoForPlayer(id).subscribe(response2 => {
            if(response2=="error"){
              return '{"status":"error"}';
            }
            console.log(response2);
            response.auctionInfo[i]['extra'] = response2;
            //if we are about to exit the loop, assign the variable
            if(i==response.auctonInfo.length-1){
                this.tradepile = response;
                console.log(this.tradepile);
              }
          });
      }
    });
  }
}
