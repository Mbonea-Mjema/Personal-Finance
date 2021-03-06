import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service"
import { Chart } from 'chart.js';
import {NgModel,NgForm} from "@angular/forms"
import Typed from 'typed.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sheets_data: any[];
  clicked_month: number;
  Balance=0
  Average=0
  Month = "Month"
  item
  spinner:boolean=true

  graph: Chart
  pieChart:Chart
  constructor(public data: DataService) { }

  monthNames = this.data.monthNames

  _items = this.data._items

 
  getMonthData(temp) {

    this.Month = temp
    var month = this.monthNames.indexOf(temp)

    var new_sheet = [];
    this.clicked_month = month
    var old_sheet:any[] = this.data.getData()

   new_sheet= old_sheet.filter((x)=>{
     if(x.date.getMonth()==month){ 
       return x;
     }
    })
  
  
   // console.log(new_sheet)
    this.sheets_data = new_sheet
    if(this.graph){
    this.graph.destroy()
    this.pieChart.destroy()
    }
    this.graph = this.data.getChart(new_sheet)
    this.pieChart = this.data.pieData(new_sheet)
    //this.data.chart.PieChart()
  }

  getItem(ItemSelected) {
    console.log(ItemSelected)
    var local_items = this._items
    if (this.clicked_month) {
      this.getMonthData(this.monthNames[this.clicked_month])
    }
    var sheet = this.sheets_data
    //console.log(sheet)
    var new_sheet = [];
    new_sheet=sheet.filter(x=>{
     if (x.type==ItemSelected)
      {
        return x;
      }
    })
    
    this.sheets_data = new_sheet
  }

  ngOnInit() {


    //setInterval(this.data.setData(this),1000);
    this.data.setData(this)
    console.log(this.data.getData());

    var typed = new Typed("h1.cool-font", {
      strings: ["Welcome Mbonea 😊", "Dashboard"],
      smartBackspace: false, // Default value
      typeSpeed: 40
    });

    setInterval(() => {




    }, 10000);
  }

}
