import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageMock } from '../testing/storage.mock';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: Storage, useClass: StorageMock },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
