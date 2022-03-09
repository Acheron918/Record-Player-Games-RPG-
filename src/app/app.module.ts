import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroComponent } from './component/hero/hero.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { PostComponent } from './component/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { LoginComponent } from './component/login/login.component';
import { GroupComponent } from './component/group/group.component';
import { LfgComponent } from './pages/lfg/lfg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReviewsComponent,
    FooterComponent,
    HeroComponent,
    RankingComponent,
    PostComponent,
    PostsComponent,
    LoginComponent,
    GroupComponent,
    LfgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
