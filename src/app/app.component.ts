import { Component,OnInit } from '@angular/core';
import { DataService } from "./services/data.service"
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
sheets_data:any[];
clicked_month:number;
Month="Month"
item
graph:Chart
constructor(private data : DataService){}

monthNames=this.data.monthNames

_items=this.data._items

getMonthData(month){

  this.Month=month
  var month = this.monthNames.indexOf(month)

  var new_sheet=[];
  this.clicked_month=month
  var old_sheet=this.data.getData()

  for(let i in old_sheet)
  {
  var date =new Date(old_sheet[i][0])
  var month_index=date.getMonth()
  if(month_index==month)
    {
    //  console.log('found')
      new_sheet.push(old_sheet[i])

    }
  }
  //console.log(new_sheet)
  this.sheets_data=new_sheet
  this.graph=this.data.getChart(new_sheet)
}

getItem(ItemSelected){
  console.log(ItemSelected)
  var local_items = this._items
  if(this.clicked_month){
  this.getMonthData(this.monthNames[this.clicked_month])
  }
  var sheet=this.sheets_data
  //console.log(sheet)
  var new_sheet=[];
  for (var data in sheet )
  {
    var item = sheet[data][1]
    if(item==ItemSelected)
    {
      // console.log("found")
      new_sheet.push(sheet[data])
    }
  }
  this.sheets_data=new_sheet
}

ngOnInit(){


//setInterval(this.data.setData(this),1000);
  this.data.setData(this)
  console.log(this.data.getData());


  setInterval(()=>{




},10000);
}

}
