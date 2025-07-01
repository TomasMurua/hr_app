import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LocalDbService {
  constructor(private storage: Storage) {}

  saveUsers(list: any[]) {
    return this.storage.set('users', list);
  }

  getUsers() {
    return this.storage.get('users');
  }
}
