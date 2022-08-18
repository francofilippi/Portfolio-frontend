import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShadowsComponent } from './components/shadows/shadows.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectComponent } from './components/portfolio/proyect/proyect.component';
import { FavsComponent } from './components/favs/favs.component';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Vistas
import { IndexComponent } from './views/index/index.component';
import { Page404Component } from './views/page404/page404.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [ // Aquí van los componentes o directivas que va a utilizar este modulo
    AppComponent,
    IndexComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    CalendarComponent,
    FooterComponent,
    LayoutComponent,
    Page404Component,
    ShadowsComponent,
    PortfolioComponent,
    ProyectComponent,
    FavsComponent,
    EducationComponent
  ],
  imports: [  // Aquí van los modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [], // Aquí inyectamos dependencias / servicios
  bootstrap: [AppComponent], // Aquí le indicamos nuestro componente principal (container)
  exports: [], // Componentes que queremos exponer a otros modulos
})
export class AppModule { }
