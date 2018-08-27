import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  _items = ['Lent','ATM','laundry','transport','food','shopping','SUSF','Stationery','Mis']
sheetData; // stores data from  google sheets

  // you need to add HttpClientModule in the app.module file so this automatically creates an object for you
  constructor(private http:HttpClient) { }

   // sets the data it requires a app-root Object
  setData(rootObject)  {
      let tag={
          'Lent':'money_off',
          'ATM':'attach_money',
          'laundry':'donut_large',
          'transport':'local_taxi',
          'food':'fastfood',
          'shopping':'shopping_basket',
          'SUSF':'add',
          'Stationery':'create',
          'Mis':'check_box',
          'n':'warning'
        }

      let temp;
      let url:string='https://script.googleusercontent.com/macros/echo?user_content_key=64ASAhDDCbGDwtCLHqvkkd7xjPIwfef7giXV3hldi6tJtHkg0kqyyerrw2Rdh6BkmehAjzqWZCwvy3n4nB4N2BlyV2nzG1_Fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDm5wm8myN0NiWrrPmEMyAnQmdLe1OAJKfvTvQXAcTez2qjDb8p6nnlb6EVlPTNjZja4hoZq-IFr&lib=MYB81T8g1EhYHZEXN5SVvn3fjb9rHuhc5'

      let data_array=[];
      var raw_data;
        this.http.get(url).subscribe(data => {


      temp=data;
     // console.log(this.temp)
      raw_data=temp;
      for (let i in temp)
      {
        var value=temp[i][1];
        value=value.trim();
        temp[i].push(tag[value])
        data_array.push(temp[i])
        //console.log(temp)
      }
          });

          rootObject.sheets_data=data_array;
          this.sheetData=data_array;
          console.log('run')
        }

 getData() {
return  this.sheetData;
}

}
