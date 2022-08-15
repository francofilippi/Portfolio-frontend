import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Views
import { IndexComponent } from './views/index/index.component';
import { Page404Component } from './views/page404/page404.component';
import { ShadowsComponent } from './components/shadows/shadows.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: IndexComponent },
      { path: 'shadows', component: ShadowsComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: '**', component: Page404Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
