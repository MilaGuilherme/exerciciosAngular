import { Component, OnInit } from '@angular/core';
import { CincoService } from './exercicio05.service';

@Component({
  selector: 'app-cinco',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css']
})
export class CincoComponent implements OnInit {

  filmes:any [] = [];
  filmesSearch = [];

  movieSearch = '';

  title = 'Catálogo de Filmes';

  constructor(public cincoService: CincoService) { }

  ngOnInit(): void {
    this.getHomePage();
  }

  getHomePage() {
    this.cincoService.getMovies()
     .subscribe(
       dados => {
         this.filmes = dados.results;
         this.filmesSearch = dados.results;

         for(let i=0; i< this.filmes.length; i++){
           this.filmes[i].img = "https://image.tmdb.org/t/p/w500"+this.filmes[i].backdrop_path;
         }

         console.log(this.filmes)

       }
     );
  }

  Search(){
    if(this.movieSearch != ""){
      this.filmes =this.filmesSearch;
      this.filmes = this.filmes.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.movieSearch.toLocaleLowerCase());
      })
    }else if(this.movieSearch == ""){
      this.ngOnInit();
    }
  }

}
