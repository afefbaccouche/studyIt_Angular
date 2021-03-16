import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Classe} from '../classe';
import {ClasseService} from '../classe.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {_isNumberValue} from '@angular/cdk/coercion';



@Component({
    selector: 'add-class',
    templateUrl: './addclass.component.html',
    styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {
    addForm: FormGroup;
    classename : string;
    capacite :number;
    niveau : number;
    idUser : number;



    constructor(private router: Router, private classeService: ClasseService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.addForm = this.formBuilder.group({
            classename : [null, Validators.required],
            capacite : [null, Validators.required ],
            idNiveau : [null, Validators.required],
            idUser : [null, Validators.required],
        });

    }
    onFormSubmit() {
        this.classeService.addclasse(this.addForm.value)
            .subscribe((res: Classe) => {
                this.router.navigate(['/afficheclass']);
            });

    }


    navigate(path) {
        this.router.navigate([path]);
    }




}
