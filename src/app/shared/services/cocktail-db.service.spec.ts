import { TestBed } from '@angular/core/testing';

import { CocktailDbService } from './cocktail-db.service';

describe('CocktailDbService', () => {
  let service: CocktailDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
