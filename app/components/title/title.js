import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';


export default class TitleTitleComponent extends Component {

    @tracked showclass =true

    login(){
        this.showclass = true
    }
    register(){
        this.showclass = false
    }
}
