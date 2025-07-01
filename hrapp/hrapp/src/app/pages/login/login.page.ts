import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  rut: string = '';
  password: string = '';

  constructor(private router: Router, private storage: Storage) {}

  async onSubmit() {
    // Basic form validation
    if (this.rut && this.password) {
      // Set login status in storage
      await this.storage.set('isLogged', true);
      this.router.navigate(['/tabs']);
    }
  }
}
