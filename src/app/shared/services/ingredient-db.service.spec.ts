import { TestBed } from '@angular/core/testing';

import { IngredientDbService } from './ingredient-db.service';

describe('IngredientDbService', () => {
  let service: IngredientDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
