import { Planta } from '../planta';
import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-listar-plantas',
  templateUrl: './listar-plantas.component.html'
})

export class ListarPlantasComponent {
  @Input() data: Planta[] = []

  public filtrarTipo(tipo: string): Planta[] {
    return this.data.filter(p => p.tipo == tipo);
  }
  
}
