import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // El siguiente método se utiliza para logear al usuario de la aplición que es un employee
  login(loginData: {email: string, password: string}){ // Se define el método loginEmployee con el parámetro loginData de tipo objeto que contiene el email y el password del employee
    return this.http.post<{code: number}>(`${API_URL}/login`, loginData
    ); // Se hace el llamado a la api para logear al employee. Si el email y el password son correctos, la api devuelve un token el cual será usado para
  };
}
