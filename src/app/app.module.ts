import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DbzModule } from './dbz/dbz.module';
import { DbzPracticeModule } from './dbz-practice/dbz-practice.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    DbzPracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
