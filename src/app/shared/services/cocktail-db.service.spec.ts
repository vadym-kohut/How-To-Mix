import { TestBed } from '@angular/core/testing';
import { CocktailDbService } from './cocktail-db.service';
import { provideHttpClient, withXhr } from '@angular/common/http';

describe('CocktailDbService', () => {
  let service: CocktailDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CocktailDbService,
        provideHttpClient(withXhr())
      ],
    });
    service = TestBed.inject(CocktailDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
