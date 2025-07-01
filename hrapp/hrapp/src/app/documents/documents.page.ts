import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EmployeeApiService, User } from '../services/employee-api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DocumentsPage {
  users: User[] = [];

  constructor(private api: EmployeeApiService) {}

  ionViewWillEnter() {
    this.api.getAll().subscribe((res) => (this.users = res));
  }
}
