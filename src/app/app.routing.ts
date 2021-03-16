import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {updateclassComponent} from './gestionclass/updateclass/updateclass.component';
import {AfficheclassComponent} from './gestionclass/afficherclass/afficheclass.component';
import {AddclassComponent} from './gestionclass/addclass/addclass.component';
import {AfficheNiveauComponent} from './gestionNiveau/afficherNiveau/afficheNiveau.component';
import {AddNiveauComponent} from './gestionNiveau/addNiveau/addNiveau.component';
import {updateNiveauComponent} from './gestionNiveau/updateclass/updateNiveau.component';
import {AfficheReclamationComponent} from './gestionReclamation/afficheReclamation/afficheReclamation.component';
import {AddReclamationComponent} from './gestionReclamation/addReclamation/addReclamation.component';
import {updateReclamationComponent} from './gestionReclamation/updateReclamation/updateReclamation.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {path: 'updateclass/:id', component: updateclassComponent},
  {path: 'afficheclass', component: AfficheclassComponent},
  {path: 'addclass', component: AddclassComponent},
  {path: 'afficheniveau', component: AfficheNiveauComponent},
  {path: 'addniveau', component: AddNiveauComponent},
  {path: 'updateniveau/:id', component: updateNiveauComponent},
  {path: 'affichereclamation', component: AfficheReclamationComponent},
  {path: 'addreclamation', component: AddReclamationComponent},
  {path: 'updatereclamation', component: updateReclamationComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
