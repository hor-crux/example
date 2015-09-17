import {Store} from "horcrux-flux"
import {register} from "horcrux-di" 

@register
export default class AppStore extends Store<any> {
	
	trigger() {
		this.changed();
	}

}