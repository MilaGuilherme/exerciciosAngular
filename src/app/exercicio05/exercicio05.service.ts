import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CincoService {

  constructor(private http: HttpClient) { }

  getMovies(){

    const apiKey = 'd416af5d4faee64e25ab001d87aab5c3';

    const url = 'https://api.themoviedb.org/3/';

    const discover = `${url}movie/popular?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false`;

    console.log(discover)
    return this.http.get(discover);

  }
}
