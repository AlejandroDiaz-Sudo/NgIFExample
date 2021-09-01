import { NgIf } from '@angular/common';
import { createHostListener } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

      statuslogueo: boolean = true;
      status2: boolean = false;
      nologin: boolean = true;
      title = 'Login';

      

          constructor(private authService:AuthService){}
  

    loginWhithGoogle(){
    this.authService.loginWhithGoogle();
    }
  


    btnsalida(){  
    alert("Funcion de Salida pendiente de agregar");
    }


    ontoogle(){
    this.statuslogueo =!this.statuslogueo;
    this.status2 =!this.status2;
    this.nologin =!this.nologin;
    this.authService.loginWhithGoogle();
    }













  /*************Prueba IF CONDICIONALES *******************/
    lcase(){

          
      var a = new Boolean(false);
      let resultado = 'hola';

          if (a == false) {

                console.log(resultado);        

            } else {
              
                console.log("nou");
            }


      }
/*************Prueba IF CONDICIONALES *******************/






}

