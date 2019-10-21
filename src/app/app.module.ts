import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NHeaderComponent } from "./n-header/n-header.component";
import { AboutComponent } from "./about/about.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { FavoritesComponent } from "./favorites/favorites.component";

const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "movies/:id", component: MovieDetailComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "**", redirectTo: "movies", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    NHeaderComponent,
    AboutComponent,
    MoviesComponent,
    MovieDetailComponent,
    FavoritesComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
