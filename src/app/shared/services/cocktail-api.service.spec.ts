import { TestBed } from '@angular/core/testing';
import { CocktailApiService } from './cocktail-api.service';
import { provideHttpClient } from '@angular/common/http';

describe('CocktailApiService', () => {
  let service: CocktailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CocktailApiService,
        provideHttpClient()
      ],
    });
    service = TestBed.inject(CocktailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
