import { Planta } from './planta';

describe('Planta', () => {
  it('should create an instance', () => {
    expect(new Planta(
      1, // id
      "Comun", // nombre_comun
      "Cientifico", // nombre_cientifico
      "Interior", // tipo
      600, // altura_maxima
      "Todos", // clima
      "Para esta prueba cualquier sustrato funciona" // sustrato_siembra
    )).toBeTruthy();
  });
});
