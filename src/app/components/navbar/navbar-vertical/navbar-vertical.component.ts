import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/sesion.service';

@Component({
  selector: '[app-navbar-vertical]',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss'],
})
export class NavbarVerticalComponent implements OnInit {

  constructor(private router:Router, private session : SesionService) {}

  ngOnInit(): void {
    var navbarStyle = localStorage.getItem('navbarStyle');
    if (navbarStyle && navbarStyle !== 'transparent') {
      document
        .querySelector('.navbar-vertical')
        ?.classList.add(`navbar-${navbarStyle}`);
    }
  }



  Onlogout(){
    localStorage.removeItem('USUARIO_ID');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('API_KEY');
    this.session.setLoggedInn(false);
    this.router.navigate(['/login']);
  }
}
