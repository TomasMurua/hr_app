import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RequestsPage {
  requestType: string = '';
  description: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  async onSubmit() {
    const toast = await this.toastController.create({
      message: 'Request submitted successfully!',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    await toast.present();

    // Reset form
    this.startDate = '';
    this.endDate = '';
    this.description = '';
  }
}
