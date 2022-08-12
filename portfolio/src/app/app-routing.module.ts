import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'contact',component:ContactComponent},
  { path: '**', component: PageNotFoundComponent } // Route pour erreur 404, toujours décalré en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
