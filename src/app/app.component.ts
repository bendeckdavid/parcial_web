import { Planta } from './plantas/planta';
import { Component, OnInit } from '@angular/core';
import { PlantasAPIService } from './plantas/plantas-api.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'parcial_web';
  plantas: Planta[] = [];

  constructor(private plantasApi: PlantasAPIService) {}
  
  ngOnInit() {
    this.plantasApi.getPlantas().subscribe(data => this.plantas = data);
  }

}
