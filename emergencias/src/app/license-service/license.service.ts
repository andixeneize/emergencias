import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  // Nota: estos parámetros deberían estar en un archivo de configuración y no expuestos en el componente.
  private url: string = 'https://api.jsonbin.io/b/5f0887eb5d4af74b0129dd77';
  private secret: string = '$2b$10$4Y96c.i9eIU/cHJ8yY41Oev2GtnY3nKoQkMVAMBK/tLRl.3WYqmOK';
  private headers = new HttpHeaders().append('secret-key', this.secret);

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todas las licencias
   *
   * @public
   * @return {*}  {Observable<any>}
   * @memberof LicenseService
   */
  public getLicenses(): Observable<any> {
    return this.http.get( this.url, { headers: this.headers } )
  }
}
