import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';





import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  imports: [ BrowserModule, HomeModule, AboutModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
