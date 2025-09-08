import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule  } from '@angular/material/dialog';
import { AuthModalComponent } from '../../features/auth-modal/auth-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,
    MatDialogModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



  constructor(private dialog: MatDialog) {}

  //function to open account modal
  openDialog() {
    const isMobile = window.innerWidth < 841;
    this.dialog.open(AuthModalComponent, {
      width:  isMobile ? '100vw' : '800px',
      maxWidth: isMobile ? '100vw' : '95vw',
      panelClass: 'auth-modal-panel'
    });
  }

  // functions for burger menu
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
