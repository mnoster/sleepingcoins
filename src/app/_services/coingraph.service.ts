import { Injectable } from '@angular/core';
import { WindowRef } from '../_services/window-ref.service';
import { MORRIS_JS } from "../_utils/morris.min.js"

@Injectable()
export class CoingraphService {
    private _window: Window;

    constructor (private windowRef: WindowRef) {
        this._window = windowRef.nativeWindow
    }

  	graphData:Array<any> = []

	createGraph(response) {
	    if (response) {
	    	console.log("reponse:" , response)
	        // Similar structure to the previous method, except the success callback in this function iterates through the response data
	        // And builds up the graph data array with objects of graph properties
            var coinData = response.Data
            this.graphData = []

            for (var i = 0; i < coinData.length; i++) {
                this.graphData.push({
                    close: coinData[i].close,
                    low: coinData[i].low,
                    high: coinData[i].high,
                    open: coinData[i].open,
                    time: new Date(coinData[i].time * 1000),
                    volumefrom: coinData[i].volumefrom,
                    volumeto: coinData[i].volumeto
                });
            }
            // Here we actually initialize and build the graph
            // We are calling the generateGraph fn
            this.generateGraph(this.graphData, "time");
	    } else console.error("No Coin Type");
	}

    generateGraph(data, xCoordinate) {
        console.log("this.MorrisL ")
        let M:any = MORRIS_JS()
        M.Area({
            element: 'graphArea',
            data: data,
            parseTime:false,
            xkey: xCoordinate,
            ykeys: ['close', 'low', 'high', 'open'],
            labels: ['close', 'low', 'high', 'open','time'],
            pointSize: 2,
            hideHover: 'auto',
            behaveLikeLine: true,
            lineColors: ["red", "blue", "green", "grey"],
            pointFillColors: ["red", "blue", "black", "orange"],
            pointStrokeColors: ["red", "blue", "black", "orange"],
            fillOpacity: .3
        });
    }
}
