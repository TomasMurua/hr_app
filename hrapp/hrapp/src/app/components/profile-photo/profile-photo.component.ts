import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
})
export class ProfilePhotoComponent implements OnInit {
  avatar?: string;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    this.avatar = await this.storage.get('avatar');
  }

  async take() {
    const img = await Camera.getPhoto({
      quality: 70,
      allowEditing: false,
      resultType: CameraResultType.Base64, // base64 web fallback
    });
    this.avatar = `data:image/jpeg;base64,${img.base64String}`;
    await this.storage.set('avatar', this.avatar); // cache foto
  }
}
