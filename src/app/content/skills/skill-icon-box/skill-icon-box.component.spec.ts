import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIconBoxComponent } from './skill-icon-box.component';

describe('SkillIconBoxComponent', () => {
  let component: SkillIconBoxComponent;
  let fixture: ComponentFixture<SkillIconBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillIconBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillIconBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
