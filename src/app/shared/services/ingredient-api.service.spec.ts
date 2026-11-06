import { TestBed } from '@angular/core/testing';
import { IngredientApiService } from './ingredient-api.service';
import { provideHttpClient, withXhr } from '@angular/common/http';

describe('IngredientApiService', () => {
  let service: IngredientApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IngredientApiService,
        provideHttpClient(withXhr())
      ],
    });
    service = TestBed.inject(IngredientApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
