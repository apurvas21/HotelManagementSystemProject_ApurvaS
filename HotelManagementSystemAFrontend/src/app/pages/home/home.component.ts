import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 /*  constructor(private router: Router) {}

  // Custom scroll behavior to scroll to the top of the section
  @HostListener('window:scroll', ['$event'])
  onScrollEvent(event: any) {
    const urlTree = this.router.parseUrl(this.router.url);
    const fragment = urlTree.fragment;
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }
  } */

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(this.router.url);
        const fragment = urlTree.fragment;
        if (fragment) {
          this.scrollToElement(fragment);
        }
      }
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
