import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/sesion.service';


@Component({
  selector: '[app-main-content]',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor(private router:Router, private session : SesionService) {}

  ngOnInit(): void {}

  
  Onlogout(){
    localStorage.removeItem('USUARIO_ID');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('API_KEY');
    this.session.setLoggedInn(false);
    this.router.navigate(['/login']);

    console.log('Cerro Sesion Correctamente');
  }
}
