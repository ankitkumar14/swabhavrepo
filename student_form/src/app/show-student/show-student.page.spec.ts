import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowStudentPage } from './show-student.page';

describe('ShowStudentPage', () => {
  let component: ShowStudentPage;
  let fixture: ComponentFixture<ShowStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
