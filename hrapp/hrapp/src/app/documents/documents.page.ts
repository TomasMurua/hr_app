import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EmployeeApiService, User } from '../services/employee-api.service';
import { LocalDbService } from '../services/local-db.service';
import { tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DocumentsPage {
  users: User[] = [];

  constructor(private api: EmployeeApiService, private db: LocalDbService) {}

  ionViewWillEnter() {
    this.api
      .getAll()
      .pipe(
        tap((list) => this.db.saveUsers(list)),
        catchError((_) => this.db.getUsers())
      )
      .subscribe((list) => (this.users = list || []));
  }
}
