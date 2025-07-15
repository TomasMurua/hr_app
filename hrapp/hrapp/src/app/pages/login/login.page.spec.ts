import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { StorageMock } from '../../../testing/storage.mock';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginPage],
      providers: [{ provide: Storage, useClass: StorageMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
