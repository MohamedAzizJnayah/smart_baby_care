import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-auth-modal',
  standalone: true,
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule]
})
export class AuthModalComponent implements OnInit, OnDestroy {


  // liste de test
  private users = [
    { email: 'emna@gmail.com', password: '1234' },
  ];

  signInForm: FormGroup;
  signUpForm: FormGroup;
  isMobile = false;
  mode: 'signin' | 'signup' = 'signup';

  loginError = false;
  loginErrorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s'-]+$/)]
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s'-]+$/)]
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`{}\[\]|:;"'<>,.?/\\]).{8,25}$/
          )
        ]
      ]
    });
  }

  // accès rapide aux controls
  get f() { return this.signUpForm.controls; }
  get s() { return this.signInForm.controls; }

  // Changement mode desktop (vous pouvez garder si utilisé)
  toggleToSignUp() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('container')?.classList.add('right-panel-active');
    }
  }

  toggleToSignIn() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('container')?.classList.remove('right-panel-active');
    }
  }


  onSubmitSignIn() {
    if (!this.signInForm.valid) return;

    const { email, password } = this.signInForm.value;
    const found = this.users.find(u => u.email === email && u.password === password);

    if (found) {
      this.loginError = false;
      this.dialogRef.close();
      this.router.navigate(['/user-home']);
    } else {
      // déclenchement du message inline
      this.loginErrorMessage = '❌ Incorrect email or password';
      this.loginError = true;
    }
  }

  onSubmitSignUp() {
    if (this.signUpForm.valid) {
      console.log('Sign Up Data:', this.signUpForm.value);
    }
  }

  // Écouteur resize
  private resizeListener = () => {
    this.isMobile = window.innerWidth < 841;
  };

  ngOnInit() {
    // n'exécute côté serveur que si browser
    if (isPlatformBrowser(this.platformId)) {
      this.resizeListener();
      window.addEventListener('resize', this.resizeListener);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }


}
