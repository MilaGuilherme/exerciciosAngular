import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesIdService {

  constructor(private http: HttpClient) { }

  getMovieDetail(id: any){

    const apiKey = 'd416af5d4faee64e25ab001d87aab5c3';

    const url = 'https://api.themoviedb.org/3/';

    const discover = `${url}movie/${id}?api_key=${apiKey}&language=pt-BR&include_adult=false`;

    console.log(discover)
    return this.http.get(discover);

  }
}
