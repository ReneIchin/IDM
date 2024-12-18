import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private _loggin: boolean = false;

  // Creamos un BehaviorSubject para gestionar el estado de inicio de sesión
  private logginIdSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._loggin);

  constructor() {
    // Verificar si el usuario está logueado al iniciar la aplicación
    this._loggin = this.checkLoggedInStatus();
    this.logginIdSubject.next(this._loggin); // Emite el valor de inicio de sesión en la suscripción
  }

  // Método para obtener si el usuario está logueado
  get loggeId(): boolean {
    return this._loggin;
  }

  // Establecer el estado de login (cuando el usuario inicia sesión)
  setLoggedInn(value: boolean): void {
    this._loggin = value;
    this.logginIdSubject.next(value);
    
    // Guardar el estado en localStorage
    if (value) {
      localStorage.setItem('user_logged_in', 'true');
    } else {
      localStorage.removeItem('user_logged_in');
    }
  }

  // Método para obtener el observable del estado de login
  getLoggedInObservable(): Observable<boolean> {
    return this.logginIdSubject.asObservable();
  }

  // Verifica si el usuario está logueado en el localStorage
  private checkLoggedInStatus(): boolean {
    // Verifica si el valor en localStorage existe
    const loggedInStatus = localStorage.getItem('user_logged_in');
    return loggedInStatus === 'true';  // Si es 'true', significa que está logueado
  }

}
