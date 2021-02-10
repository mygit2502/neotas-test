import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from './constants';

@Injectable()
export class AppService {

    constructor( private _http: HttpClient){

    }
 
    getList( id ):Observable<any>{
        return this._http.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    } 
    getListBySearch( title ):Observable<any>{
        return this._http.get(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
    } 
}
