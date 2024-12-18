import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SesionService } from './sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'falcon-angular-starter';

  isLogged: boolean = true;
  private loggedInSubscription: Subscription = new Subscription();

  constructor(private sessionService : SesionService, public router : Router ) { }

  ngOnInit() {
    this.loggedInSubscription = this.sessionService.getLoggedInObservable().subscribe((loggedIn : boolean) => { 
      this.isLogged = loggedIn;
    });
  }

  ngOnDestroy(){
    this.loggedInSubscription.unsubscribe();
  }

}
