import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTileComponent } from './blog-post-tile.component';

describe('BlogPostTileComponent', () => {
  let component: BlogPostTileComponent;
  let fixture: ComponentFixture<BlogPostTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
