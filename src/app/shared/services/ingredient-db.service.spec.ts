import { TestBed } from '@angular/core/testing';
import { IngredientDbService } from './ingredient-db.service';
import { provideHttpClient } from '@angular/common/http';

describe('IngredientDbService', () => {
  let service: IngredientDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IngredientDbService,
        provideHttpClient()
      ],
    });
    service = TestBed.inject(IngredientDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
