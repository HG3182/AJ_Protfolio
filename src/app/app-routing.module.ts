import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';

const routes: Routes = [
      { path: '', component: HeroComponent },
      { path: 'about', component: AboutComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'education', component: EducationComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'certifications', component: CertificationsComponent },
      { path: 'volunteering', component: VolunteeringComponent },
      { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
