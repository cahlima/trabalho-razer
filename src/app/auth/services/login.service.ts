import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class LoginService {


  BASE_URL = "http://localhost:8082/login";
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
};
constructor(private httpClient: HttpClient) { }

  private LS_CHAVE: string = "usuarioLogado";


  public get usuarioLogado(): Usuario {
    let usu = localStorage[this.LS_CHAVE];
    return (usu ? JSON.parse(localStorage[this.LS_CHAVE]) : null);
    }
    public set usuarioLogado(usuario: Usuario) {
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
    }
    logout() {
    delete localStorage[this.LS_CHAVE];
    }

    login(login: Login): Observable<Usuario> {
      
      return this.httpClient.post<Usuario>(this.BASE_URL,login,this.httpOptions);
      }

    }