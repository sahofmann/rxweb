import {  contains,prop, } from "@rxweb/reactive-form-validators"

export class User {

	@contains({value:'@gmail.com' }) 
	emailAddress: string;

}
