import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptoApiService {

  constructor(private http:Http) { }
   URL:string = "http://localhost:7788"
   config:any = {headers:{ 'Content-Type': 'application/json'}};

  getCoinData(coinType:string, interval:string, startDate:string,limit:number){
  	console.log("Get coin data")
    let timestamp  = startDate ? "&toTs="+ startDate : '';
    // These are the various endpoints we need to operate the requests
    let endpoints = {
        byCoinTypeAndDay : "https://min-api.cryptocompare.com/data/histoday?fsym="+coinType+"&limit="+limit+"&tsym=USD&e=CCCAGG" ,
        byCoinTypeAndHour : "https://min-api.cryptocompare.com/data/histohour?fsym="+coinType+"&limit="+limit+"&tsym=USD&e=CCCAGG" + timestamp,
        coinList: "https://cryptocompare.com/api/data/coinlist?sign=true"
    };
    // There is some terenery logic below to determine which URl to use in the request
    let url:string =  !coinType && !interval ? "coinList" : coinType && interval && limit != 24 ? "byCoinTypeAndDay" : "byCoinTypeAndHour";
    let data:any = {url:endpoints[url]}
    return this.http.post(this.URL + "/crypto/" + url, JSON.stringify(data),this.config).map((response:Response) => response.json());
	}
}