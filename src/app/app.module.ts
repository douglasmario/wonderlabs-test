import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

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
  providers: [
    {
      provide: 'environment',
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
