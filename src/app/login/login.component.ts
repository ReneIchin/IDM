import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginResponse } from '../models/login-response';
import { Router } from '@angular/router';
import { SesionService } from '../sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data$: Observable<any> = new Observable<any>();
  form : FormGroup;

  constructor(private apiService : ApiServiceService, private fb : FormBuilder, private route: Router, private session:SesionService) {
    this.form = this.fb.group({
      username:['',[Validators.required,Validators.maxLength(100)]],
      password:['',[Validators.required, Validators.maxLength(100)]]
    });
   }

  ngOnInit(): void {
  }


  onLogin(){

    const newItem = { username: this.form.get('username')?.value , password : this.form.get('password')?.value };
    // this.data$ = this.apiService.get(endpoint);
    this.apiService.post<LoginResponse>('Login/LoginIDM', newItem).subscribe(
      (response : LoginResponse) => {


      if(response.RESPONSE == "OK"){
        localStorage.setItem('USUARIO_ID',response.USUARIO_ID);
        localStorage.setItem('USERNAME',response.USERNAME);
        localStorage.setItem('API_KEY',response.API_KEY);

        // localStorage.setItem('aut','1');
        this.session.setLoggedInn(true);
        this.route.navigate(['/menu']);
        console.log('Nuevo item creado:', response);

      }

    });

  }

}
