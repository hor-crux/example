import {Component, CustomElement} from "horcrux-core"
import {Router}from 'horcrux-router'

import "./test.html!"
@Component
export default class MyTest extends CustomElement {
	router = new Router();
	
	testid:number;
	
}