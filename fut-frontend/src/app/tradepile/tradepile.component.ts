import { Component, OnInit } from '@angular/core';
import { TradepileService } from './tradepile.service';
import { Http } from '@angular/http';
import {error} from "util";

@Component({
  selector: 'app-tradepile',
  templateUrl: './tradepile.component.html',
  styleUrls: ['./tradepile.component.css'],
  providers: [TradepileService]
})
export class TradepileComponent implements OnInit {

  tradeService: TradepileService;
  tradepile;


  constructor(tradepileService: TradepileService, private http: Http) {
    this.tradeService = tradepileService;
    
  }

  ngOnInit() {
    this.getTradePile();
  }

  getTradePile() {
    this.tradeService.getTradePile().subscribe(response => {

      this.tradepile = response;

       for (var i = 0; i < response.auctionInfo.length; i++) {

          var id = response.auctionInfo[i].itemData.assetId;

          //get extra info if item is a player
          if (response.auctionInfo[i].itemData.itemType == 'player') {
             this.tradeService.gatherExtraInfoForPlayer(id).subscribe(response2 => {

               for(var j =0 ; j < this.tradepile.auctionInfo.length; j++){
                 if(response2.items[0].baseId == this.tradepile.auctionInfo[j].itemData.assetId){
                   this.tradepile.auctionInfo[j].playerInfo = response2.items[0];
                   console.log(this.tradepile.auctionInfo[j]);
                 }
               }
             });
          }

       }
    });
  }

}
