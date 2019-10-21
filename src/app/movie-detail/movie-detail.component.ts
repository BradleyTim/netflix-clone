import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IMovie } from "../shared/movie";
import { MovieService } from "../movies/movie.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  movie: IMovie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.movieService.getMovies().filter(movie => {
      movie.movieId == id ? (this.movie = movie) : "";
    });
  }

  onBack(): void {
    this.router.navigate(["/movies"]);
  }
}
