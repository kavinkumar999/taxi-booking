import Component from '@glimmer/component';
import Store from '@ember-data/store';
import Ember from 'ember';
import { inject as service } from '@ember/service';
import BookController from '../../controllers/book';
import Router from '../../router';
export default class BookFormComponent extends Component {
  
  james(){
    let reo = new BookController();
    reo.hello()
  }
  validate_form(){
    store: inject.service()
    let fromcity = $("#fromcity")
    let tocity = $("#tocity")
    let phoneno = $("#phoneno")
    let date = $("#date")
    let time = $("#time")
    fromcity.val() == "Select city" ? fromcity.addClass("is-invalid") : fromcity.removeClass("is-invalid")
    tocity.val() == "Select city" ? tocity.addClass("is-invalid") : tocity.removeClass("is-invalid")
    phoneno.val() == "" ? phoneno.addClass("is-invalid") : phoneno.removeClass("is-invalid")
    date.val() == "" ? date.addClass("is-invalid") : date.removeClass("is-invalid")
    time.val() == "" ? time.addClass("is-invalid") : time.removeClass("is-invalid")
    let order = this.store.createRecord("raid",{
      // customer : "kavin",
      // from : fromcity.val(),
      // to : tocity.val(),
      // phone : phoneno.val(),
      // date : date.val(),
      // tiem : time.val(),
      km : "5",
      amount : "50"

    })
    
    if(fromcity.val() != "Select city" && fromcity.val() != "Select city" && phoneno.val() != "" && time.val() != "" && date.val() != "" ){
      //out
      $(".success").removeClass("d-none")
      let order = store.createRecord("raid",{
        // customer : "kavin",
        // from : fromcity.val(),
        // to : tocity.val(),
        // phone : phoneno.val(),
        // date : date.val(),
        // tiem : time.val(),
        km : "5",
        amount : "50"

      })
    }
  }
 
  
}
