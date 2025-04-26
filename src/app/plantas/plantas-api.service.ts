import { Planta } from './planta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class PlantasAPIService {
  private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(res => res.map(p => new Planta(
        p.id,
        p.nombre_comun,
        p.nombre_cientifico,
        p.tipo,
        p.altura_maxima,
        p.clima,
        p.sustrato_siembra
      )))
    );
  }

}
