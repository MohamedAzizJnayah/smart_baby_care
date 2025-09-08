import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  userForm!: FormGroup;
  editMode = false;

  // données initiales
  user = {
    firstName: 'Emna',
    lastName:  'Zghal',
    email:     'emna.zghal@example.com',
    gender:    'female',               // 'female' ou 'male'
    address:   '123 Rue de Tunis, Tunisie',
    phone:     '+216 12 345 678',
    image:     null
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName:  [this.user.lastName,  Validators.required],
      email:     [this.user.email,     [Validators.required, Validators.email]],
      gender:    [this.user.gender,    Validators.required],
      address:   [this.user.address,   Validators.required],
      phone:     [this.user.phone,     Validators.required],
      image:     [this.user.image]
    });
  }

  editProfile() {
    this.editMode = true;
  }

  cancelEdit() {
    this.editMode = false;
    this.userForm.reset(this.user);    // remet les valeurs d’origine
  }

  saveProfile() {
    if (this.userForm.invalid) return;
    this.user = { ...this.userForm.value };
    this.editMode = false;
    // ici, tu pourrais appeler un service pour persister les changements
    console.log('Saved user', this.user);
  }

  logout() {
    console.log('Logout clicked');
  }
}
