import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class BookRoute extends Route {
   init(){
    this.store.createRecord("customer",{ username : "kavin", pass: "admin@123"}).save()


   }

   model(){
    // let order = this.store.createRecord(customer,{
      //   username : "kavin",
      //   pass : "admin"
  
    //   })
    // order.save()
    console.log(this.store.findAll("customer"));
   // this.store.createRecord("raid",{customer : "kavin", from : "A" , to : "B", phone:"8585454546", date : "5/02/2021" , time : "13:45", km : "5", amount : "45" }).save()
   // this.store.createRecord("customer",{ id : "kavin", username : "kavin", pass: "admin"}).save()
   // return this.store.findAll("raid")
}
    
   afterModel(){
   //  console.log(this.store.findAll("customer"));

   }
}
 
