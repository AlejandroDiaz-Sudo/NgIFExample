import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import {User} from './User';





@Injectable({
  providedIn: 'root'
})


export class AuthService {
  

constructor(private AngularFireAuth:AngularFireAuth) { 
    this.AngularFireAuth.authState.subscribe(user =>{
            
      console.log('nuevo al cargar ');

    });


  }

 async loginWhithGoogle(){

    await this.AngularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res=>{

      console.log('Login Hecho');
    }).catch(err=>{

      console.log('Error al iniciar sesión',err);

    })



  }

}
