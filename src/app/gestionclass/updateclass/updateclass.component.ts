import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import {ClasseService} from '../classe.service';
import {Classe} from '../classe';

@Component({
    selector: 'update-class',
    templateUrl: './updateclass.component.html',
})
// tslint:disable-next-line:class-name
export class updateclassComponent implements OnInit {
    editForm: FormGroup;
    id : number;


    constructor(private router: Router, private route: ActivatedRoute, private classeService: ClasseService, private formBuilder: FormBuilder) {
    }
    ngOnInit(): void {

        this.editForm = this.formBuilder.group({
            classename : [null, Validators.required],
            capacite : [null, Validators.required ],
            idNiveau : [null, Validators.required],
            idUser : [null, Validators.required],
            id:[null],
        });
        this.getclassesById(+this.route.snapshot.params.id);
    }
    onFormSubmit() {
        this.classeService.editclasse(this.editForm.value)
            .subscribe((res: Classe) => {
                this.router.navigate(['/afficheclass']);
            });

    }
    getclassesById(id: any) {
        this.classeService.getClasseById(id).subscribe((data: Classe) => {

            this.editForm.patchValue({
                id: data.id,
                classename: data.classname,
                capacite: data.capacite,
                idNiveau: data.idniveau.idniveau,
                idUser: data.iduser.iduser,
            });

        });
        console.log(this.editForm)
    }
    editDetails() {
        this.router.navigate(['/updateMovie', this.id]);
    }




}
