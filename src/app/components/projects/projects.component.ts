import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  showProject1 = false;
  showProject2 = false;
  showProject3 = false;
  
  toggleProject1() {
    this.showProject1 = !this.showProject1;
  }
  
  toggleProject2() {
    this.showProject2 = !this.showProject2;
  }
  
  toggleProject3() {
    this.showProject3 = !this.showProject3;
  }
}
