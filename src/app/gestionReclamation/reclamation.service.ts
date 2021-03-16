import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',    }
)
export class ReclamationService {
    constructor(private http: HttpClient) {
    }

    public getReclamation(): Observable<any> {
        return this.http.get('http://localhost/pidev/web/app_dev.php/class/reclamation');
    }

    public editReclamation(reclamation): Observable<any> {
        return this.http.post('http://localhost/pidev/web/app_dev.php/class/reclamation/edit',reclamation);
    }
    public addReclamation(reclamation): Observable<any> {
        return this.http.post('http://localhost/pidev/web/app_dev.php/class/reclamation/new',reclamation);
    }
    public deleteReclamation(id): Observable<any> {
        return this.http.delete('http://localhost/pidev/web/app_dev.php/class/reclamation/'+id +'/delete');
    }
    public getReclamationById(id): Observable<any> {
        return this.http.get('http://localhost/pidev/web/app_dev.php/class/reclamation/'+id +'/show');
    }

}


