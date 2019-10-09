import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringMPC } from './string.interface';


@Injectable()
export class StringService {

	base_url : String = "http://34.69.217.179:8080/string";

	constructor(private http: HttpClient) { } 

	getStrings() : Observable<StringMPC[]> {
		return this.http.get<StringMPC[]>(`${this.base_url}/`);
	}

	addString(newString:String ) : Observable<StringMPC>{
		return this.http.post<StringMPC>(`${this.base_url}`, {"text": newString}, {
			'headers': {'Content-Type': 'application/json'}
		});
	}

	updateString(editedStringMPC:StringMPC): Observable<StringMPC> {
		console.log(`${this.base_url}/${editedStringMPC._id}`);
		console.log(`${editedStringMPC.value}`);
		return this.http.put<StringMPC>(`${this.base_url}/${editedStringMPC._id}`, {'text': editedStringMPC.value}, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	deleteString(id: String): Observable<StringMPC> {
		return this.http.delete<StringMPC>(`${this.base_url}/${id}`);
	}

}
