import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-exo01',
  imports: [FormsModule],
  templateUrl: './exo01.html',
  styleUrl: './exo01.css',
})
export class Exo01 {

  prenom : string = "Mathieu";
  nom: string = "Peeters";
  age : number = 39
  imgUrl : string = "https://ici.exploratv.ca/upload/site/post/picture/1375/5fff633dea1fb.1611063684.jpg"
  altIMG : string = "Photo d'un emeu d'Autralie"
  tailleIMG : string = "300"
  estActif : boolean = false
  compteur : number = 0

  incrementer(){
    this.compteur ++
  }
  decrementer(){
    this.compteur --
  }

  toggleIsActif(){
    if(this.estActif){
      this.estActif = false
    }
    else{
      this.estActif = true
    }
  }
}
