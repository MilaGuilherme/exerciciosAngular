import { Component, OnInit } from '@angular/core';
import { Movies } from './movies';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class QuatroComponent implements OnInit {

  title = 'Catálogo de Filmes';

  filmes = Movies;

  constructor() { }

  ngOnInit(): void {
  }

}
