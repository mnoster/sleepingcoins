"use strict"
import { Component, OnInit } from '@angular/core';
import { CryptoApiService as CAS } from '../_services/crypto-api.service'
import { CoingraphService as CGS } from '../_services/coingraph.service'
 
@Component({
  selector: 'app-home',
  providers: [CAS,CGS],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  	constructor(private CAS:CAS, private CGS:CGS) {}

	loading = true;
	graphLabel:string
	ticker:string; 

  	buildGraph(coinTicker:string,label:string){
  		const g = document.getElementById("graphArea")
  		this.ticker = coinTicker
  		this.graphLabel = label
        g.innerHTML = ''
  		this.CAS.getCoinData(coinTicker,"week","",30)
  		.subscribe(
            data => {
            	this.CGS.createGraph(data)
                console.log("Content: ", data)
            },
            error => {
                console.log("Content  Error: " , error);
                this.loading = false;
            }); 		
  	}
  	changeColor(){
  		const g:any = document.getElementsByClassName("main-container")
  		const n:any = document.getElementsByClassName("day-mode")
  		g[0].style.background = g[0].style.background === "black" ? "white" : "black"  
  		n[0].style.background = n[0].style.background === "limegreen" ? "red" : "limegreen"  		
  	}
}
