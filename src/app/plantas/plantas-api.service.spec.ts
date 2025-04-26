import { TestBed } from '@angular/core/testing';
import { PlantasAPIService } from './plantas-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantasAPIService', () => {
  let service: PlantasAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlantasAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
