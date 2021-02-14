import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './topbanner/topbanner.component';
import { CategoryComponent } from './category/categoty.component';
import { SearchBarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopBannerComponent,
    CategoryComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
