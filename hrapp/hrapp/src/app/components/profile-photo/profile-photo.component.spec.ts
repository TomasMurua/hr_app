import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { StorageMock } from '../../../testing/storage.mock';

import { ProfilePhotoComponent } from './profile-photo.component';

describe('ProfilePhotoComponent', () => {
  let component: ProfilePhotoComponent;
  let fixture: ComponentFixture<ProfilePhotoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProfilePhotoComponent, IonicModule.forRoot()],
      providers: [{ provide: Storage, useClass: StorageMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
