import { TestBed, async } from '@angular/core/testing';
import { AuthorComponent } from './author.component';

describe('AuthorComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              AuthorComponent
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AuthorComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
