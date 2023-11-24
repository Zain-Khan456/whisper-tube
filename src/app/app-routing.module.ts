import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RenderComponent } from './render/render.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { AudiobookComponent } from './audiobook/audiobook.component';
import { SubtitlesComponent } from './subtitles/subtitles.component';
import { SummarayComponent } from './summaray/summaray.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'newproject', component: NewprojectComponent },
  { path: 'subtitles', component: SubtitlesComponent },
  { path: 'render', component: RenderComponent },
  { path: 'audiobook', component: AudiobookComponent },
  { path: 'summaray', component: SummarayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
