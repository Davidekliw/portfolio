import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialLinksComponent } from './sozial-links.component';

describe('SozialLinksComponent', () => {
  let component: SozialLinksComponent;
  let fixture: ComponentFixture<SozialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SozialLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SozialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
