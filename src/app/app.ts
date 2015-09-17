import {Component, created, CustomElement} from "horcrux-core"
import {inject} from "horcrux-di"
import AppStore from "../appstore"

import "./app.html!"
@Component
class MyApp extends CustomElement {
	
	@inject(AppStore)
	private store:AppStore;
	
	private hello = 1;
	
	private names = [
		{first:"Foo", last:"Foolington"},
		{first:"Bar", last:"Barson"}
	];
	
	
	@created created() {
		this.store.register(this.onAppStore, this);
	}
	
	onAppStore(data:any) {
		this.hello = this.hello + 1;
	}
	
	trigger() {
		this.hello = this.hello + 1;
	}
	
	set(value) {
		this.hello = value;
	}
}