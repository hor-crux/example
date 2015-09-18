import {Component, CustomElement} from "horcrux-core"
import {Router}from 'horcrux-router'

import MyTest from './test'

import "./b.html!"
@Component
export default class MyB extends CustomElement {
	router = new Router();
	
	constructor() {
		super();
		this.router.config({url:'b/:testid', component:{view1:MyTest, view2:MyTest}});
	}
	
	canActivate(): Promise<any> {
		return window.confirm('Active Component "MyB"?') ?
			Promise.resolve('')
			:
			Promise.reject('')
	}
	
	canDeactivate(): Promise<any> {
		return window.confirm('Deactive Component "MyB"?') ?
			Promise.resolve('')
			:
			Promise.reject('')
	}
}