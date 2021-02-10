import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    constructor( private _http: HttpClient){

    }
 
    getList( id ):Observable<any>{
        return this._http.get(`http://www.omdbapi.com/?i=${id}&apikey=8f429ad3`);
    } 
    getListBySearch( title ):Observable<any>{
        return this._http.get(`http://www.omdbapi.com/?t=${title}&apikey=8f429ad3`);
    } 
}
