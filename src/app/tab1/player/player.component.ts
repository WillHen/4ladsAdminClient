import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { PlayersService } from '../../api/players.service';

@Component({
	selector: "app-player",
	templateUrl: "./player.component.html",
	styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit, OnDestroy {
	public player: any = {};
	public sub: any;

	constructor(private _route: ActivatedRoute, private _playersService: PlayersService) {}

	ngOnInit() {
		this._route.params.subscribe((params: any) => {
			if (params.id > 0) {
				this._playersService.getPlayer(params.id).subscribe(data => this.player = data[0]);
			}
		});
	}

	ngOnDestroy() {}
}
