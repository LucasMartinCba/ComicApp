import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  termino: string;
  heroes: any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroes(params.termino);
    });
  }

}
