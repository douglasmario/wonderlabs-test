import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';



@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    UserCardComponent,
    NavigationComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
