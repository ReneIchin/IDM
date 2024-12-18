import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { CreateMiembrosComponent } from './create-miembros/create-miembros.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () =>
      import('./layouts/layouts.module').then((m) => m.LayoutsModule),
  },
  { path: 'menu', component: MenuComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'createMiembros', component: CreateMiembrosComponent },


  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],  // Aplica la guardia aquí
    children: [
      // Aquí van las rutas hijas dentro del MainLayout
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      // { path: 'home', component: HomeComponent },  // Ejemplo de ruta hija
      // Otras rutas hijas dentro del layout
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
