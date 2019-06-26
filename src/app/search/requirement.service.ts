import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Requirement } from './skill.model';
@Injectable()
export class RequirementService {
    private serviceUrl = 'http://localhost:3000/skills';

    constructor(private http: HttpClient) { }

    getRequirements(): Observable<Requirement[]> {
        return this.http.get<Requirement[]>(this.serviceUrl);
    }

}