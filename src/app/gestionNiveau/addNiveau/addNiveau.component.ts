import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClasseService} from '../../gestionclass/classe.service';
import {Niveau} from '../../gestionclass/niveau';


@Component({
    selector: 'add-niveau',
    templateUrl: './addNiveau.component.html',
    styleUrls: ['./addNiveau.component.css']
})
export class AddNiveauComponent implements OnInit {

    addniveauForm: FormGroup;

    constructor(private router: Router, private classeService: ClasseService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.addniveauForm = this.formBuilder.group({
            idniveau: [null],
            libelle: [null, Validators.required],
        });
    }

    onFormSubmit() {
        this.classeService.addNiveau(this.addniveauForm.value)
            .subscribe((res: Niveau) => {
                this.router.navigate(['/afficheniveau']);
            });
    }

    navigate(path) {
        this.router.navigate([path]);
    }

}
