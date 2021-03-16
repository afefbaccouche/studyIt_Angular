
import {AfficheclassComponent} from './afficherclass/afficheclass.component';
import {updateclassComponent} from './updateclass/updateclass.component';
import {NgModule} from '@angular/core';
import {ClasseService} from './classe.service';
import {AddclassComponent} from './addclass/addclass.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AfficheNiveauComponent} from '../gestionNiveau/afficherNiveau/afficheNiveau.component';
import {AddNiveauComponent} from '../gestionNiveau/addNiveau/addNiveau.component';
import {updateNiveauComponent} from '../gestionNiveau/updateclass/updateNiveau.component';
import {AddReclamationComponent} from '../gestionReclamation/addReclamation/addReclamation.component';
import {AfficheReclamationComponent} from '../gestionReclamation/afficheReclamation/afficheReclamation.component';
import {updateReclamationComponent} from '../gestionReclamation/updateReclamation/updateReclamation.component';
import {ReclamationService} from '../gestionReclamation/reclamation.service';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,

    ],
declarations: [
    AfficheclassComponent,
    updateclassComponent,
    AddclassComponent,
    AfficheNiveauComponent,
    AddNiveauComponent,
    updateNiveauComponent,
    AddReclamationComponent,
    AfficheReclamationComponent,
    updateReclamationComponent


],
providers: [ClasseService, ReclamationService],
bootstrap: []
})
export class ClasseModule{ }
