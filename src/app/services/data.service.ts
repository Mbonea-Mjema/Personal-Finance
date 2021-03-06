import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import {DataModel } from '../../Models/Data.model'
import { ChartService } from './chart.service';
import * as mment from 'moment'
import { environment } from '.././../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  monthNames = environment.months
  _items = ['Lent', 'ATM', 'laundry', 'transport', 'food', 'shopping', 'SUSF', 'Stationery', 'Mis']
  sheetData; // stores data from  google sheets
 spinner=true
 balance=0
  graph;
  // you need to add HttpClientModule in the app.module file so this automatically creates an object for you
  constructor(private http: HttpClient,public  chart : ChartService) {
  
    
  }

  

  getChart(sheet) {
  
   //  console.log(sheet)
     let data = sheet
     let dates = []
     let values = []

    // remove atm values 
     data=data.filter((x)=>{
     if(x.type!="ATM")
     {
       return x;
      }
    }

    )

for (let arry of data)
 {
  if(!dates.includes(arry.date.toDateString()))
  {
    dates.push(arry.date.toDateString())
    // create
    let temp:any[] =data.filter((x)=>{
      if(x.date.toDateString()==arry.date.toDateString())
      {
      return x;
      }
    })
    //console.log(temp)
    var Sum :number=0;
     for (var t of temp)
     {
       Sum+=t.amount
     }
    values.push(Sum)
  }
  
   }
  

// console.log(dates)
//console.log(values)
return this.chart.LineChart(dates,values)

 }

// sets the data it requires a app-root Object
setData(rootObject) {
  let tag =  {
    'Lent': 'money_off',
    'ATM': 'attach_money',
    'laundry': 'donut_large',
    'transport': 'local_taxi',
    'food': 'fastfood',
    'shopping': 'shopping_basket',
    'SUSF': 'add',
    'Stationery': 'create',
    'Mis': 'check_box',
    'n': 'warning'
  }
  let temp;
  let url: string = environment.googleSheet
  let data_array = [];
  var raw_data;
   
  
  this.http.get(url).subscribe(data => {

     
 temp=data
    raw_data = temp;
    

    
    for (let i in temp) {
      var value = temp[i][1];
      value = value.trim();
      temp[i].push(tag[value])
      data_array.push(temp[i])
      //console.log(temp)
    }
  
   // console.table(data_array)
    // creating a data model
    let model_array:any[]=[]
    model_array = data_array.map((x)=>{
    let temp = new DataModel()
    temp.date =new Date( x[0])
    temp.type = x[1]
    temp.amount = x[2]
    temp.icon = x[3]
    return temp
    });
    //console.log(model_array )
    
    
    
    rootObject.sheets_data = model_array;
    
    this.sheetData = model_array;
    this.setBalance()
    this.Average()
    rootObject.Balance=this.balance
    rootObject.Average=this.Average()
    
   // console.log(rootObject.pieChart)
  //  console.log(this.balance)
    setTimeout(()=>{
      var index = new  Date().getMonth()
      var month = environment.months[index]
      rootObject.getMonthData(month)
 
    },1500)
     //  console.log("graph")
    //console.log(rootObject.graph)

  },(error)=>{
alert('Check your internet connection')
  },()=>{
    this.spinner=false
  }
  );
}

//hey can you see this
getData() {
  return this.sheetData;
}

Average(sheet=this.sheetData){
var start=mment(sheet[1].date)

var end = new Date()

var diff=start.diff(end,'days')*-1
//console.log(`difference is ${diff} days!`)

var spent=0
this.sheetData.map((x)=>{
  if(x.type!='ATM'){
   
    spent=spent+x.amount
    
  }
  else{
    if(x.amount<1000)
    {
     // console.log(x.amount)
      spent-=x.amount
    }
  }
})
console.log(`average is ${(spent/diff)*30} rupees`)
return ((spent/diff)*30)
}

setBalance(sheet=this.sheetData){
  sheet.map((x)=>{
    (x.type=='ATM')?this.balance=this.balance+x.amount:this.balance=this.balance-x.amount
   })
}

pieData(sheet=this.sheetData){
  let keys = environment.tag
  let label=[]
  let data= []
  for (var value in keys)
  {
    var temp=sheet.filter((x)=>(x.type==value&&x.type!='ATM'))
    var total = 0
    temp.map((x)=>total+=x.amount)
    if(total!=0){
    value=value.toUpperCase()
    label=[...label,value]
    data=[...data,total]
    }
  }
  // console.log(label)
  // console.log(data)
  return this.chart.PieChart(label,data)
}

}
