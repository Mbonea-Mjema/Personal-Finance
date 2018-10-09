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
        display: false,
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
 // console.log(graph)
  return graph;
 
}

PieChart(label,data){
 var pi =new Chart('sample', {
    type: 'doughnut',
    data : {
      datasets: [{
         backgroundColor: ["#DECF3F","#60BD68","#F17CB0","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: data
         }],
           labels:label
           }});
          // console.log(pi)
           return pi;
}

}
