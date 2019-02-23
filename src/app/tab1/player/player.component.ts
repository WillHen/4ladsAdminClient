import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ChangeDetectorRef } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { PlayersService } from "../../api/players.service";
import { Player } from "../../models/player.model";

@Component({
	selector: "app-player",
	templateUrl: "./player.component.html",
	styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit, OnDestroy {
	public player: Player = {};
	public playerForm: FormGroup;
	public sub: any;

	private _getPlayerSubscription: Subscription;
	private _savePlayerSubscription: Subscription;

	constructor(
		private _route: ActivatedRoute,
		private _playersService: PlayersService,
		private changeRef: ChangeDetectorRef,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.playerForm = this.formBuilder.group({
			first_name: ["", Validators.required],
			last_name: ["", Validators.required],
			position: ["", Validators.required],
			squad_number: ["", Validators.required],
			league_appearances: [""],
			league_yellow_cards: [""],
			country: ["", Validators.required],
			player_id: [""]
		});

		this._route.params.subscribe((params: any) => {
			if (params.id > 0) {
				this._getPlayerSubscription = this._playersService
					.getPlayer(params.id)
					.subscribe(data => {
						this.player = data[0];

						for (let prop in this.player) {
							if (this.playerForm.controls[prop]) {
								this.playerForm.controls[prop].patchValue(
									this.player[prop]
								);
							}
						}
					});
			}
		});
	}

	savePlayer(playerForm: FormGroup) {
		this._savePlayerSubscription = this._playersService
			.savePlayer(playerForm.value)
			.subscribe(res => {
				console.log(res);
			});
	}

	ngOnDestroy() {
		this._getPlayerSubscription.unsubscribe();
		this._savePlayerSubscription.unsubscribe();
	}
}
