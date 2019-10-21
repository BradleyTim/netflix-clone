import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NHeaderComponent } from "./n-header/n-header.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "movies", pathMatch: "full" },
  { path: "movies", component: HomeComponent },
  { path: "movies/:id", component: MovieDetailComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NHeaderComponent,
    AboutComponent,
    HomeComponent,
    MovieDetailComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
