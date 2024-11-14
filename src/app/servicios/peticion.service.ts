import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PeticionService {
  // Se encarga de cargarse con algunas habilidades (la forma de hacer peticiones) para salir hacer peticiones
                 // HttpClient se encarga de hacer peticiones hacia el backend
  constructor(private http:HttpClient) { }
  requestOptions:any = {}
  
  urlHost:string = "http://localhost:3000" 
  post(url:string,payload:any){
    // Un proceso interno de java que se encarga de ejecutar peticones y no termina hasta que np haya
    //respuesta del servidor, tiene dos momentos  resuelto o rechazado
    let promise = new Promise ((resolve, reject) => {

      this.requestOptions = {
        headers: new HttpHeaders ({
        //''
        }),
        //Importante, esto permite enviar la cookie 
        withCredentials:true
      }

      this.http.post(url,payload, this.requestOptions).toPromise().then((res:any)=>{
        resolve(res)
      }).catch((error) => {
        console.log(error)
        reject (error)

      })
    })

    return promise

  }

 //                             Peticion Get

  //Peticion tipo get no necesita payload, solo necesita url this.http.get(url)

  get(url:string,payload:any){
    // Un proceso interno de java que se encarga de ejecutar peticones y no termina hasta que np haya
    //respuesta del servidor, tiene dos momentos  resuelto o rechazado
    let promise = new Promise ((resolve, reject) => {

      this.requestOptions = {
        headers: new HttpHeaders ({
        //''
        }),
        //Importante, esto permite enviar la cookie 
        withCredentials:true
      }

      this.http.get(url, this.requestOptions).toPromise().then((res:any)=>{
        resolve(res)
      }).catch((error) => {
        console.log(error)
        reject (error)

      })
    })

    return promise

  }


  //               Peticion tipo put

  //- Peticion tipo put misma configuracion que post

  put(url:string,payload:any){
    // Un proceso interno de java que se encarga de ejecutar peticones y no termina hasta que np haya
    //respuesta del servidor, tiene dos momentos  resuelto o rechazado
    let promise = new Promise ((resolve, reject) => {

      this.requestOptions = {
        headers: new HttpHeaders ({
        //''
        }),
        //Importante, esto permite enviar la cookie 
        withCredentials:true
      }

      this.http.put(url,payload,this.requestOptions).toPromise().then((res:any)=>{
        resolve(res)
      }).catch((error) => {
        console.log(error)
        reject (error)

      })
    })

    return promise

  }

  delete(url:string,payload:any){
    // Un proceso interno de java que se encarga de ejecutar peticones y no termina hasta que np haya
    //respuesta del servidor, tiene dos momentos  resuelto o rechazado
    let promise = new Promise ((resolve, reject) => {
      this.http.delete(url,payload).toPromise().then((res:any)=>{
        resolve(res)
      }).catch((error) => {
        console.log(error)
        reject (error)

      })
    })

    return promise

  }
}