import {Component, OnInit} from '@angular/core';
import {Classe} from '../../gestionclass/classe';
import {ClasseService} from '../../gestionclass/classe.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../gestionclass/User';
import {ReclamationService} from '../reclamation.service';
@Component({
    selector: 'add-reclamation',
    templateUrl: './addReclamation.component.html',
    styleUrls: ['./addReclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
    addreclamationForm: FormGroup;
    id: number;
    obj: string;
    description : string;
    idUser : number;



    constructor(private router: Router, private reclamationService: ReclamationService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.addreclamationForm = this.formBuilder.group({
            obj : [null, Validators.required],
            description : [null, Validators.required ],
            idUser : [null, Validators.required],
        });

    }
    onFormSubmit() {
        this.reclamationService.addReclamation(this.addreclamationForm.value)
            .subscribe((res: Classe) => {
                this.router.navigate(['/affichereclamation']);
            });

    }


    navigate(path) {
        this.router.navigate([path]);
    }

}
