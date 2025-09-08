import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',  // lien vers le .html
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  deferredPrompt: any;
  showInstallButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault();
    this.deferredPrompt = event;
    this.showInstallButton = true;
  }

  installApp() {
    if (!this.deferredPrompt) { return; }
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      console.log(`Installation : ${choiceResult.outcome}`);
      this.deferredPrompt = null;
      this.showInstallButton = false;
    });
  }
}
