import {Component, created, attached, CustomElement} from "horcrux-core"

import "./name.html!"

@Component
class MyName extends CustomElement {
	
	person = {};
	
	@created created() {
		
	}

	@attached attached() {
		
	}	
}