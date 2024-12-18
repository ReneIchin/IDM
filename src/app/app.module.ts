import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from './layouts/layouts.module';
import { MenuComponent } from './menu/menu.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateMiembrosComponent } from './create-miembros/create-miembros.component';

@NgModule({
  declarations: 
  [AppComponent, 
   LoginComponent, HomeComponent, MenuComponent, MiembrosComponent, CustomModalComponent, CreateMiembrosComponent],
  imports: 
  [BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  NgbModalModule,
  HttpClientModule,
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
