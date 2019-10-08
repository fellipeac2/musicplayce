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
		if(this.stringMPC != undefined) {
			console.log("Uploading value");
			this.stringMPC.value =value;
			this.myString.updateString(this.stringMPC)
				.subscribe(
					(res: StringMPC) => {
					},
					(error) => console.log(error)
				);
		}
	}

	onDelete() {
	}

}
