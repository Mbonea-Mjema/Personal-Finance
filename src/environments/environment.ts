// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  
  firebase: {
    apiKey: "AIzaSyCgFCTEqb_dRVFi_4W9ML4vKX7DIvIKLhQ",
    authDomain: "user-auth-21a70.firebaseapp.com",
    databaseURL: "https://user-auth-21a70.firebaseio.com",
    projectId: "user-auth-21a70",
    storageBucket: "user-auth-21a70.appspot.com",
    messagingSenderId: "797972415085"
  },
  tag : {
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
  },
  googleSheet:'https://script.googleusercontent.com/macros/echo?user_content_key=64ASAhDDCbGDwtCLHqvkkd7xjPIwfef7giXV3hldi6tJtHkg0kqyyerrw2Rdh6BkmehAjzqWZCwvy3n4nB4N2BlyV2nzG1_Fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDm5wm8myN0NiWrrPmEMyAnQmdLe1OAJKfvTvQXAcTez2qjDb8p6nnlb6EVlPTNjZja4hoZq-IFr&lib=MYB81T8g1EhYHZEXN5SVvn3fjb9rHuhc5',

  months:["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
