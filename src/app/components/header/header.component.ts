import { Component } from '@angular/core';
import { faGraduationCap, faBriefcase, faUser, faProjectDiagram, faCertificate, faHandsHelping, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mobileMenuOpen = false;
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  
}
