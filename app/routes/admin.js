import Route from '@ember/routing/route';

export default class AdminRoute extends Route {
  init(){
      

       
        this.store.createRecord("raid",{customer : "admin", from : "A" , to : "B", phone:"8585454546", date : "5/02/2021" , time : "13:45", km : "5", amount : "45" }).save().then(()=>{
            console.log("add record successfully");
    
        })

      
    
    ;
  }

    model(){
        
        return this.store.findAll("raid")
    }
    afterModel(){

        let order = this.store.findAll("raid").then(
           
            data =>{
                data.forEach(element => {
                    console.log(element.amount);
                    
                });
            }
        )
       
        
        console.log(order);
        console.log("aftermodel");

    }
}
