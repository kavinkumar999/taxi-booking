import Controller from '@ember/controller';
import { inject } from '@ember/service';
import CustomerModel from '../models/customer';


export default class BookController extends Controller {
    
    
    hello(){
        
        console.log("jellldsf")
        // let item = this.get("store").createRecord("customer",["admin","askfd"])
        let order = this.store.createRecord("cutomer",{
            username : "kavin",
            pass : "admin"
      
          })
        order.save()
        console.log(item);
    }
}
