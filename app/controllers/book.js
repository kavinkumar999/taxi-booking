import Controller from '@ember/controller';
import { inject } from '@ember/service';
import CustomerModel from '../models/customer';
import { action } from '@ember/object';


export default class BookController extends Controller {
    
    @action
    hello(event){
        
        let post = this.store.createRecord("customer",{username : "kumar", pass: "admin@123"})
        post.save().then(()=>{
            console.log("success");
        console.log(this.store.findAll("customer"));

        })
    } 

    @action
    validate_form(event){
        event.preventDefault();

        // let fromcity = $("#fromcity")
        // let tocity = $("#tocity")
        // let phoneno = $("#phoneno")
        // let date = $("#date")
        // let time = $("#time")
        // fromcity.val() == "Select city" ? fromcity.addClass("is-invalid") : fromcity.removeClass("is-invalid")
        // tocity.val() == "Select city" ? tocity.addClass("is-invalid") : tocity.removeClass("is-invalid")
        // phoneno.val() == "" ? phoneno.addClass("is-invalid") : phoneno.removeClass("is-invalid")
        // date.val() == "" ? date.addClass("is-invalid") : date.removeClass("is-invalid")
        // time.val() == "" ? time.addClass("is-invalid") : time.removeClass("is-invalid")
       
        
        // if(fromcity.val() != "Select city" && fromcity.val() != "Select city" && phoneno.val() != "" && time.val() != "" && date.val() != "" ){
        //     $(".success").removeClass("d-none")
        //     let order = this.store.createRecord("raid",{
        //         customer : "kavin",
        //         from : fromcity.val(),
        //         to : tocity.val(),
        //         phone : phoneno.val(),
        //         date : date.val(),
        //         time : time.val(),
        //         km : "5",
        //         amount : "50"
        
        //     })
        //     order.save().then(()=>{
        //         console.log("success");
        //         console.log(this.store.findAll("raid"));
        //     })
        let nane = this.store.query("customer").then(function(list) {
            // console.log(list.content); 
        
            
        })
        console.log(nane); 
        
        
        
        // nane.forEach(element => {
        //     console.log("enter the password")
        //     console.log(nane.username);
        //     console.log(nane.pass);
            
        // });
            // console.log(this.store.findAll("customer"));

        // }
      }
}
