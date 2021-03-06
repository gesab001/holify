import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
						  {path: '', component: HomeComponent},
                          { path: 'player/:type/:filename', component: PlayerComponent },
						  { path: 'player/:instrumental/:vocal/:karaoke/:musicVideo/:filename', component: PlayerComponent }
						  
					   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
