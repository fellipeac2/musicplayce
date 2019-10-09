import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
import { StringMPC } from '../string.interface';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	stringMPC : StringMPC;
	constructor(private myString : StringService) {
	}

	ngOnInit() {
		this.getAllString();
		console.log("ngOnOinit()");
	}
	getAllString() {
		this.myString.getStrings().subscribe(
			(data: StringMPC[]) =>  { //start of (1)
				if(data.length > 0) {
					this.stringMPC = data[0];
				}
			}, //end of (1)
			(error: any)   => console.log(error), //(2) second argument
			()             => console.log('all data gets') //(3) second argument
		);
	}

	onSave(value: string){
		let aux = this;
		if(this.stringMPC != undefined) {
			console.log("Uploading value");
			this.stringMPC.value =value;
			this.myString.updateString(this.stringMPC)
				.subscribe(
					(res: StringMPC) => {
						aux.stringMPC = res;
					},
					(error) => console.log(error)
				);
		} else {
			console.log("Insert value");
			this.myString.addString(value)
				.subscribe(
					(res: StringMPC) => {
						console.log(res);
						aux.stringMPC = res;
					},
					(error) => console.log(error)
				);
		}
	}

	onDelete() {
		let aux = this;
		this.stringMPC.value = "";
		this.myString.deleteString(this.stringMPC._id)
			.subscribe(
				(res: StringMPC) => {
					console.log("deleted");
					aux.stringMPC = undefined;
				},
				(error) => console.log(error)
			);
	}

}
