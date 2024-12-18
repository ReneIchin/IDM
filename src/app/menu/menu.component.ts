import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/sesion.service';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuData: any;

  constructor(private router:Router, private session : SesionService, private apiService : ApiServiceService) 
  {
    this.getMenu();
   }

  ngOnInit(): void {
  }

  getMenu(){

    this.apiService.get('Home/GetMenu/A52C1490-2F40-49F9-984F-860B247D37B5').subscribe(
      data => {
          console.log('Data:', data);
          this.menuData = data; 
      },
      error => {
          console.error('Error:', error);
      }
  );

  }

  Onlogout(){
    localStorage.removeItem('USUARIO_ID');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('API_KEY');
    this.session.setLoggedInn(false);
    this.router.navigate(['/login']);

    console.log('Cerro Sesion Correctamente');
  }
}
