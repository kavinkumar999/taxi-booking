import Component from '@glimmer/component';


export default class BookFormComponent extends Component {

  validate_form(){
    let fromarea = $("#fromcity")
    let tocity = $("#tocity")
    let phoneno = $("#phoneno")
    let date = $("#date")
    let time = $("#time")
    fromarea.val() == "Select city" ? fromarea.addClass("is-invalid") : fromarea.removeClass("is-invalid")
    tocity.val() == "Select city" ? tocity.addClass("is-invalid") : tocity.removeClass("is-invalid")
    phoneno.val() == "" ? phoneno.addClass("is-invalid") : phoneno.removeClass("is-invalid")
    date.val() == "" ? date.addClass("is-invalid") : date.removeClass("is-invalid")
    time.val() == "" ? time.addClass("is-invalid") : time.removeClass("is-invalid")
    if(fromarea.val() != "Select city" && fromarea.val() != "Select city" && phoneno.val() != "" && time.val() != "" && date.val() != "" ){
      //out
    }
  }
}
