import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NHeaderComponent } from "./header/n-header.component";
import { AboutComponent } from "./about/about.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "movies/:id", component: MovieDetailComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NHeaderComponent,
    AboutComponent,
    MoviesComponent,
    MovieDetailComponent,
    FavoritesComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
