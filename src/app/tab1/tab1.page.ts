import { Component, OnInit } from "@angular/core";
import { PlayersService } from "../api/players.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-tab1",
	templateUrl: "tab1.page.html",
	styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
	public playerList: any[];

	constructor(
		private _playersService: PlayersService,
		private _route: Router
	) {}

	ngOnInit() {
		this._playersService
			.getAllPlayers()
			.subscribe(data => (this.playerList = data));
	}

	openPlayer(id: number) {
		this._route.navigateByUrl(this._route.url + "/player/" + id);
	}
}
