import { TestBed, ComponentFixture, async, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { SearchItemComponent } from './search-item.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { CustomButtonStandaloneComponent } from '../../../shared/components/custom-button-standalone/custom-button-standalone.component';
import { RouterTestingModule } from '@angular/router/testing';

import { mock, mockAppState } from './mockAppState';
import { BorderColorDirective } from '../../directives/border-color.directive';
import { deleteVideoById, toggleFavorite } from '../../../storage/store-video/video.action';
import { By } from '@angular/platform-browser';

 describe('search-itemComponent', () => {
   let component: SearchItemComponent;
   let fixture: ComponentFixture<SearchItemComponent>;
   let store: MockStore;
 
   const mockVideo = mock
 
   beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
       declarations: [SearchItemComponent, TruncatePipe, BorderColorDirective,],
       providers: [provideMockStore({ initialState: { VideoOOO: mockAppState } })],
       imports: [RouterTestingModule, CustomButtonStandaloneComponent],
     })
     .compileComponents();
   }));
 
   beforeEach(fakeAsync(() => {
     fixture = TestBed.createComponent(SearchItemComponent);
     component = fixture.componentInstance;
     store = TestBed.inject(MockStore);
     component.card = mockVideo;
     fixture.detectChanges();
     tick();  
   }));
 
   it('should create', () => {
     expect(component).toBeTruthy();
   });

   it('should dispatch toggleFavorite action when addFavorite is called', () => {
      const spyDispatch = jest.spyOn(store, 'dispatch');
      component.addFavorite('testId');
      expect(spyDispatch).toHaveBeenCalledWith(toggleFavorite({ id: 'testId' }));
    });

    it('should dispatch deleteVideoById action when handleDelete is called', () => {
      const spyDispatch = jest.spyOn(store, 'dispatch');
      component.handleDelete('testId');
      expect(spyDispatch).toHaveBeenCalledWith(deleteVideoById({ id: 'testId' }));
    });
    it('should initialize isFavorite$ correctly', fakeAsync(() => {
      store.setState({ VideoOOO: { ...mockAppState, favoriteVideo: [mockVideo] } });

      component.ngOnInit();
      tick();

      component.isFavorite$.subscribe(isFavorite => {
        expect(isFavorite).toBeTruthy(); 
      });
    }));
    it('should update isFavorite$ when favoritesVideo$ emits', fakeAsync(() => {
      store.setState({ VideoOOO: { ...mockAppState, favoriteVideo: [mockVideo] } });
      component.ngOnInit();
      tick();
      component.isFavorite$.subscribe(isFavorite => {
        expect(isFavorite).toBeTruthy(); 
      });
    }));
    it('should render the template correctly', () => {
      fixture.detectChanges();
      const linkElement = fixture.debugElement.query(By.css('.link'));
      expect(linkElement.nativeElement.href).toBe('http://localhost/dsg');
    });
  
 });