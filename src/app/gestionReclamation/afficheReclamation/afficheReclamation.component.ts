
import {Component, OnInit} from '@angular/core';
import {Reclamation} from '../reclamation';
import {ReclamationService} from '../reclamation.service';
// @ts-ignore
import {Router} from '@angular/router';


@Component({
    selector: 'affiche-reclamation',
    templateUrl: './afficheReclamation.component.html',
    styleUrls: ['./afficheReclamation.component.css']
})
export class AfficheReclamationComponent implements OnInit {
    reclamationList: Reclamation[]= [];
    path: string;
    id : number;

    ngOnInit(): void {
        this.getreclamations();
    }

    constructor( private reclamationService: ReclamationService, private router: Router) {
    }


    private getreclamations() {
        this.reclamationService.getReclamation().subscribe(
            data => {
                this.reclamationList = data;
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

    removereclamation(id: any) {
        this.reclamationService.deleteReclamation(id)
            .subscribe(res => {
                this.reclamationList.splice(this.reclamationList.indexOf(this.reclamationList.filter(value => value.id == id)
                    [0]),1);
            });
    }





}
