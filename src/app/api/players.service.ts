import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private _http: HttpClient) { }

  getAllPlayers(): Observable<any> {
  	return this._http.get<any>('http://localhost:3000/players');
  }


  getPlayer(id: number): Observable<any> {
  	return this._http.get<any>(`http://localhost:3000/getPlayer/${id}`)
  }
}
