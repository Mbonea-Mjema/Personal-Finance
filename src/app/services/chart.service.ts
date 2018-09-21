import { Injectable } from '@angular/core';
import Chart from 'chart.js'
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

LineChart(dates,values){
  var graph = new Chart('canvas', {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          data: values,
          borderColor: "#3cba9f",
          fill: false
        },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Spending Pattern'
      },     
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
 
  });
  return graph;
 
}

PieChart(){
  
}

}
