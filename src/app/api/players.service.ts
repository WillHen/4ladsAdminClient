import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Player } from "../models/player.model";

@Injectable({
	providedIn: "root"
})
export class PlayersService {
	constructor(private _http: HttpClient) {}

	getAllPlayers(): Observable<Player[]> {
		return this._http.get<any>('http://localhost:3000/players');
	}

	getPlayer(id: number): Observable<Player[]> {
		return this._http.get<any>(`http://localhost:3000/getPlayer/${id}`);
	}

	savePlayer(player: Player): Observable<any> {
		return this._http.post<Player>(
			'http://localhost:3000/savePlayer/',
			player
		);
	}
}
