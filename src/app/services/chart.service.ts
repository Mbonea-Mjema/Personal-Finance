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
  return graph;
 
}

PieChart(){
  new Chart('chart2', {
    type: 'doughnut',
    data : {
      datasets: [{
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [10,20,30,90]
         }],
           labels: [
               'Red',
               'Yellow',
               'Blue',
             ]
           }});
}

}
