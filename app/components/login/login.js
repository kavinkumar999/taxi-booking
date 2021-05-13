import Component from '@glimmer/component';
import IndexController from '../../controllers/index';
import { tracked } from '@glimmer/tracking';


export default class LoginLoginComponent extends Component {
    @tracked show = true
    hi(){
        this.show = false
        let order = new IndexController()
        order.showclass = false
        
    }   
}
