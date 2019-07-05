import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Requirement } from './skill.model';
import { environment } from '../../environments/environment';


@Injectable()
export class RequirementService {
    private serviceUrl = environment.apiUrl + "skills";

    constructor(private http: HttpClient) { }

    getRequirements(): Observable<Requirement[]> {
        return this.http.get<Requirement[]>(this.serviceUrl);
    }

    searchProfiles(propertiesFileName) {
        return this.http.post(environment.apiUrl + "search-skill", propertiesFileName, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }

}