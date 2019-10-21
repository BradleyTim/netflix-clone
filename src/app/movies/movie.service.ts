import { Injectable } from "@angular/core";
import { IMovie } from "../shared/movie";

@Injectable()
export class MovieService {
  getMovies(): IMovie[] {
    return [
      {
        movieId: 1,
        movieName: "Suits",
        releaseDate: "10-10-2010",
        imageUrl: "coming soon"
      },
      {
        movieId: 2,
        movieName: "How to Get Away with Murder",
        releaseDate: "11-11-2011",
        imageUrl: "coming soon"
      },
      {
        movieId: 3,
        movieName: "The Good Wife",
        releaseDate: "12-12-2012",
        imageUrl: "coming soon"
      },
      {
        movieId: 4,
        movieName: "Boston Legal",
        releaseDate: "12-12-2012",
        imageUrl: "coming soon"
      },
      {
        movieId: 5,
        movieName: "House of Cards",
        releaseDate: "12-12-2012",
        imageUrl: "coming soon"
      },
      {
        movieId: 6,
        movieName: "The Crown",
        releaseDate: "12-12-2012",
        imageUrl: "coming soon"
      }
    ];
  }
}
