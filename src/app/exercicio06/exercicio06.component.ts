import { Component, OnInit } from '@angular/core';
import { SeisService } from './exercicio06.service';

@Component({
  selector: 'app-seis',
  templateUrl: './exercicio06.component.html',
  styleUrls: ['./exercicio06.component.css']
})
export class SeisComponent implements OnInit {

  idFilme:any [] = [];

  filmes:any [] = [];
  filmesSearch = [];

  order="";
  way="";

  movieSearch = '';

  title = 'Catálogo de Filmes';

  constructor(public seisService: SeisService) { }

  ngOnInit(): void {
    this.getHomePage();
  }

  getHomePage() {
    this.seisService.getMovies()
     .subscribe(
       (dados:any) => {
         this.filmes = dados.results;
         this.filmesSearch = dados.results;

         for(let i=0; i< this.filmes.length; i++){
           this.filmes[i].img = "https://image.tmdb.org/t/p/w500"+this.filmes[i].backdrop_path;
         }

         console.log(this.filmes)

       }
     );
  }

  Order(type: any){
    if(type == 'title'){
      this.order = "title";
      this.way = "asc"
    }
    if(type == 'votes'){
      this.order = "vote_average";
      this.way = "desc"
    }
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
