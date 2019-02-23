import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Tab1Page } from "./tab1.page";
import { PlayersService } from "../api/players.service";
import { KeysPipe } from "../pipes/keys.pipe";
import { ReplaceUnderscorePipe } from "../pipes/replace-underscore.pipe";
import { PlayerComponent } from "./player/player.component";

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{ path: "", component: Tab1Page },
			{ path: "player/:id", component: PlayerComponent }
		])
	],
	providers: [PlayersService],
	declarations: [Tab1Page, PlayerComponent, KeysPipe, ReplaceUnderscorePipe]
})
export class Tab1PageModule {}
