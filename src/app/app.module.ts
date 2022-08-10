import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  declarations: [ // Aquí van los componentes o directivas que va a utilizar este modulo
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
  imports: [  // Aquí van los modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Aquí inyectamos dependencias / servicios
  bootstrap: [AppComponent], // Aquí le indicamos nuestro componente principal (container)
  exports: [], // Componentes que queremos exponer a otros modulos
})
export class AppModule { }
