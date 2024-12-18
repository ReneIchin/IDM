import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  private baseUrl = 'http://localhost:7181/api';

  constructor(private http: HttpClient) { }

  private getApiKey(): string {
    // Aquí obtienes la API key desde donde la tengas (localStorage, un servicio de autenticación, etc.)
    return localStorage.getItem('API_KEY') || '';  // Ejemplo con localStorage
  }

  private getUsuarioId(): string {
    // Aquí obtienes el usuario_id desde donde la tengas (localStorage, un servicio de autenticación, etc.)
    return localStorage.getItem('USUARIO_ID') || '';  // Ejemplo con localStorage
  }

  // Crear los encabezados comunes con la API key (X-Api-Key) y el usuario_id (user-id)
  private createHeaders(endpoint: string): HttpHeaders {
   

    if (endpoint === 'Login/LoginIDM') {
      return new HttpHeaders({
        'Content-Type': 'application/json',  // O el tipo que necesite la API
      });
    }



    const apiKey = this.getApiKey();
    const usuarioId = this.getUsuarioId();


  console.log('API Key:', apiKey);  // Verifica si se recupera correctamente
  console.log('Usuario ID:', usuarioId);  // Verifica si se recupera correctamente
    
    if (!apiKey || !usuarioId) {
      throw new Error('Faltan la API key o el usuario_id'); // Maneja el caso de ausencia
    }
 

    return new HttpHeaders({
      'Content-Type': 'application/json',  // O el tipo que necesite la API
      'X-Api-Key': apiKey,  // Usa la API key con el nombre X-Api-Key
      'user-id': usuarioId  // Añades el usuario_id con el nombre user-id
    });

  }


  // GET: Obtener datos
  get<T>(endpoint: string, params?: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.createHeaders(endpoint);  // Asegúrate de que los encabezados son correctos
    const options = {
      headers,
      params: new HttpParams({ fromObject: params })
    };
  
    // Imprime los encabezados y opciones para verificar su formato
    console.log('Headers:', headers);
    console.log('Options:', options);
  
    return this.http.get<T>(url, options);
  }
  
  // POST: Enviar datos
  post<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.createHeaders(endpoint);

    return this.http.post<T>(url, body, { headers });
  }

  // PUT: Actualizar datos
  put<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.createHeaders(endpoint);

    return this.http.put<T>(url, body, { headers });
  }

  // PATCH: Actualizar parcialmente
  patch<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.createHeaders(endpoint);

    return this.http.patch<T>(url, body, { headers });
  }

  // DELETE: Eliminar datos
  delete<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = this.createHeaders(endpoint);

    return this.http.delete<T>(url, { headers });
  }
  
}
