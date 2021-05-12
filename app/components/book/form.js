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
  
 
  
}
