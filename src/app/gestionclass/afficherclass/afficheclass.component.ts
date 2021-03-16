import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Classe} from '../classe';
import {ClasseService} from '../classe.service';



@Component({
    selector: 'affiche-class',
    templateUrl: './afficheclass.component.html',
    styleUrls: ['./afficheclass.component.css']
})
export class AfficheclassComponent implements OnInit {
    classesList: Classe[]= [];
    path: string;
    id : number;

    ngOnInit(): void {
        this.getclasss();
    }

    constructor( private classeService: ClasseService, private router: Router) {
    }


    private getclasss() {
        this.classeService.getclasse().subscribe(
            data => {
                this.classesList = data;
                console.log(this.classesList)
            },
        );
    }

    onSelectclasse(item: any){
        this.router.navigate(['/updateclass/'+item]);
    }


    navigate(path) {
        this.router.navigate([path]);
    }
    editDetails() {
        this.router.navigate(['/updateMovie']);
    }

    removeClass(id: any) {
        this.classeService.deleteclasse(id)
            .subscribe(res => {
                this.router.navigate(['/afficheclass']);
                this.classesList.splice(this.classesList.indexOf(this.classesList.filter(value => value.id == id)
                    [0]),1);
            });
    }





}
