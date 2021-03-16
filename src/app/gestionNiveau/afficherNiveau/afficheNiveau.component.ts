import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClasseService} from '../../gestionclass/classe.service';
import {Niveau} from '../../gestionclass/niveau';
import {Observable} from 'rxjs';




@Component({
    selector: 'affiche-niveau',
    templateUrl: './afficheNiveau.component.html',
    styleUrls: ['./afficheNiveau.component.css']
})
export class AfficheNiveauComponent implements OnInit {
    niveaList: Niveau[]= [];
    path: string;
    id : number;
    niveaus: Observable<Niveau[]>;

    ngOnInit(): void {
        this.getniveau();
    }

    constructor( private classeService: ClasseService, private router: Router) {
    }

    reloadData() {
        this.niveaus = this.classeService.getNiveau();
    }


    private getniveau() {
        this.classeService.getNiveau().subscribe(
            data => {
                this.niveaList = data;
            },
        );
    }

    onSelectniveau(item: any){
        this.router.navigate(['/updateclass/'+item]);
    }


    navigate(path) {
        this.router.navigate([path]);
    }
    editDetails() {
        this.router.navigate(['/updateMovie']);
    }

    removeniveau(id: any) {
        this.classeService.deleteNiveau(id)
            .subscribe(res => {
                this.niveaList.splice(this.niveaList.indexOf(this.niveaList.filter(value => value.idniveau == id)
                [0]),1);
            });
    }





}
