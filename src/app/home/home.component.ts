import { Component, OnInit } from "@angular/core";
import { IMovie } from "../shared/movie";
import { MovieService } from "./movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
