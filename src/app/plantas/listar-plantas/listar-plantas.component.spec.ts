import { Planta } from '../planta';
import { faker } from '@faker-js/faker';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPlantasComponent } from './listar-plantas.component';

describe('ListarPlantasComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPlantasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('muestra las plantas en la tabla', () => {
    component.data = Array.from({ length: 3 }, (v, k) => new Planta(
      k, // id
      faker.word.words(2), // nombre_comun
      faker.word.words(3), // nombre_cientifico
      faker.helpers.arrayElement(['Interior', 'Exterior']), // tipo
      faker.number.int({ min:10, max:1000 }), // altura_maxima
      faker.helpers.arrayElement([
        faker.helpers.arrayElements(['Frío', 'Templado', 'cálido'], { min:1, max:2 }),
        ['Todos']
      ]).join(', '), // clima
      faker.lorem.sentence(10) // sustrato_siembra
    ));

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });

});
