import { Component, OnInit } from '@angular/core';
import { RequirementService } from './requirement.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Requirement } from './skill.model';
@Component({
    selector: 'search',
    templateUrl: './search.html',
    styleUrls: ['./search.css']
})

export class SearchComponent implements OnInit {
    dataSource = new UserDataSource(this.userService);
    displayedColumns = ['title', 'anyKeywords', 'turnAnyKeyOn', 'allKeywords', "excludingKeywords", "location", "minExp", "maxExp", "minSal", "maxSal", "propertiesFile"];
    constructor(private userService: RequirementService) { }

    ngOnInit() {
    }
}
export class UserDataSource extends DataSource<any> {
    constructor(private userService: RequirementService) {
        super();
    }
    connect(): Observable<Requirement[]> {
        return this.userService.getRequirements();
    }
    disconnect() { }
}