import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesIdService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public route:ActivatedRoute, public moviesService: MoviesIdService) { }

  id: any;
  idFilme:any;
  title = 'Catálogo de Filmes';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getId(this.id);
    this.idFilme = {img: ''};
  }

  getId(id: any){
    this.moviesService.getMovieDetail(id)
    .subscribe(
      (dados:any) => {
        this.idFilme = dados;

        this.idFilme.img = "https://image.tmdb.org/t/p/w500"+this.idFilme.poster_path;

        console.log(this.idFilme)

      }
    );
  }

}
