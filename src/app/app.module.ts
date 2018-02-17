import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routing } from "./app.routing"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { CoingraphComponent } from './coingraph/coingraph.component';
import { WindowRef } from './_services/window-ref.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CoingraphComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
