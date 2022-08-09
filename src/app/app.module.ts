import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Vistas
import { IndexComponent } from './views/index/index.component';
import { Page404Component } from './views/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    CalendarComponent,
    PortfolioComponent,
    FooterComponent,
    LayoutComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
