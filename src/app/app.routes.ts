import { Routes } from '@angular/router';
import {Exo01} from './features/exercices/exo01/exo01';
import {Exo02} from './features/exercices/exo02/exo02';
import {Exo03} from './features/exercices/exo03/exo03';
import {Exo04} from './features/exercices/exo04/exo04';
import {Exo05} from './features/exercices/exo05/exo05';
import {Exo05bis} from './features/exercices/exo05bis/exo05bis';


export const routes: Routes = [
  {  path: 'exo01', component: Exo01},
  {  path: 'exo02', component: Exo02},
  {  path: 'exo03', component: Exo03},
  {  path: 'exo04', component: Exo04},
  {  path: 'exo05', component: Exo05},
  {  path: 'exo05bis', component: Exo05bis},
];
