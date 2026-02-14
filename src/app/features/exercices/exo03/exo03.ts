import { Component } from '@angular/core';
import {DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe} from '@angular/common';
import {HidepipePipe} from '../../../shared/pipes/hidepipe-pipe';

@Component({
  selector: 'app-exo03',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    DatePipe,
    PercentPipe,
    DecimalPipe,
    HidepipePipe,
  ],
  templateUrl: './exo03.html',
  styleUrl: './exo03.css',
})
export class Exo03 {

  texteBrut : string = "vive angular"
  prix: number = 1250.145
  aujourhui: any = new Date()
  pourcentage: number = 0.52
  email : string = "pmathieu@moi.be"

}
