import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-exo02',
  imports: [FormsModule],
  templateUrl: './exo02.html',
  styleUrl: './exo02.css',
})
export class Exo02 {

  prenom: string = "";
  nom: string = "";
  age: number = 0;
  photoURL: string = "";

}
