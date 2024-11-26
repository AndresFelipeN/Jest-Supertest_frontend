import { TestBed } from '@angular/core/testing';

import { PeticionService } from './peticion.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeticionService', () => {
  let service: PeticionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
     providers: []
    });
    service = TestBed.inject(PeticionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Validacion peticion post falla si no se envia el nombre ', (done) => {
    const mokupUrl = "http://localhost:3000/usuarios/guardar"
    const mokuppayload = {}
    const mokupResponse = {state:false, mensaje: "el campo nombre es obligatorio"}

    service.post(mokupUrl,mokuppayload).then((res:any)=> {
      expect(res).toEqual(mokupResponse)
      done ()
    })
  });

  it('Validacion peticion post falla si no se envia apellidos', (done) => {
    const mokupUrl = "http://localhost:3000/usuarios/guardar"
    const mokuppayload = {nombre:"Andres Felipe"}
    const mokupResponse = {state:false, mensaje: "el campo apellidos es obligatorio"}

    service.post(mokupUrl,mokuppayload).then((res:any)=> {
      expect(res).toEqual(mokupResponse)
      done ()
    })
  });

  it('Validacion peticion post falla si solo se envia el email', (done) => {
    const mokupUrl = "http://localhost:3000/usuarios/guardar"
    const mokuppayload = {nombre:"Andres Felipe",apellidos:"Noguera"}
    const mokupResponse = {state:false, mensaje: "el campo email es obligatorio"}

    service.post(mokupUrl,mokuppayload).then((res:any)=> {
      expect(res).toEqual(mokupResponse)
      done ()
    })
  });


  it('Validacion peticion post falla si no se envia el password', (done) => {
    const mokupUrl = "http://localhost:3000/usuarios/guardar"
    const mokuppayload = {nombre:"Andres Felipe",apellidos:"Noguera",email:"felipegonnzalez@hotmail.com"}
    const mokupResponse = {state:false, mensaje: "el campo password es obligatorio"}

    service.post(mokupUrl,mokuppayload).then((res:any)=> {
      expect(res).toEqual(mokupResponse)
      done ()
    })
  });
   
  /* it('Validacion peticion post usuario guardado', (done) => {
    const mokupUrl = "http://localhost:3000/usuarios/guardar"
    const mokuppayload = {nombre:"Andres Felipe",apellidos:"Noguera",email:"felipegonnzalez@hotmail.com",password:"12345"}
    const mokupResponse = {state:true, mensaje: "usuario guardado"}

    service.post(mokupUrl,mokuppayload).then((res:any)=> {
      
      expect(res).toEqual(mokupResponse)
      done ()
    })
  }); */

  


  


});
