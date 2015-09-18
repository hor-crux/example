import {Component, created, CustomElement} from "horcrux-core"
import {Router} from 'horcrux-router';

import MyA from '../a'
import MyB from '../b'

import "./app.html!"
@Component
class MyApp extends CustomElement {
	
	router = new Router();
	
	constructor() {
		super();
		this.router.config({url:'a*', component:MyA});
		this.router.config({url:'b*', component:MyB});
		this.router.config({url:'*', redirect:'a'});
	}
	
}