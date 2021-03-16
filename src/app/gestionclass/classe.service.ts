import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
        providedIn: 'root',

    }
)
export class ClasseService {

    constructor(private http: HttpClient) {
    }

    public getclasse(): Observable<any> {
        return this.http.get('http://localhost/pidev/web/app_dev.php/class/classe');
    }

    public editclasse(classe): Observable<any> {
        return this.http.post('http://localhost/pidev/web/app_dev.php/class/classe/edit',classe);
    }
    public addclasse(classe): Observable<any> {
        return this.http.post('http://localhost/pidev/web/app_dev.php/class/classe/new',classe);
    }
    public deleteclasse(id): Observable<any> {
        return this.http.delete('http://localhost/pidev/web/app_dev.php/class/classe/'+id +'/delete');
    }
    public getClasseById(id): Observable<any> {
        return this.http.get('http://localhost/pidev/web/app_dev.php/class/classe/'+id +'/show');
    }

    public getNiveau(): Observable<any> {
        return this.http.get('http://localhost/pidev/web/app_dev.php/class/niveau');
    }
    public addNiveau(niveau): Observable<any> {
        return this.http.post('http://localhost/pidev/web/app_dev.php/class/niveau/new',niveau);
    }

    public editNiveau(classe): Observable<any> {
        return this.http.post('http://localhost/pidev/web/app_dev.php/class/classe/edit',classe);
    }
    public deleteNiveau(id): Observable<any> {
        return this.http.delete('http://localhost/pidev/web/app_dev.php/class/niveau/'+id +'/delete');
    }
    public getNiveauById(id): Observable<any> {
        return this.http.get('http://localhost/pidev/web/app_dev.php/class/niveau/'+id +'/show');
    }
}
