import { Component, OnInit } from "@angular/core";
import { IMovie } from "../shared/movie";
import { MovieService } from "./movie.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
