import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
