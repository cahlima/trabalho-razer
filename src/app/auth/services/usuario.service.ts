import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {


  BASE_URL : string = environment.BASE_URL = "http://localhost:4200/usuarios/";
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
};

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.BASE_URL,
    this.httpOptions);
    }
    buscarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.BASE_URL + id,
    this.httpOptions);
    }

    inserir(usuario: Usuario): Observable<Usuario> {
      return this.httpClient.post<Usuario>(this.BASE_URL,
      JSON.stringify(usuario),
      this.httpOptions);
      }
      remover(id: number): Observable<Usuario> {
      return this.httpClient.delete<Usuario>(this.BASE_URL + id,
      this.httpOptions);
      }
      alterar(usuario: Usuario): Observable<Usuario> {

        return this.httpClient.put<Usuario>(this.BASE_URL + usuario.id,
          JSON.stringify(usuario),
          this.httpOptions);

      }




}
