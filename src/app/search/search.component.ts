import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequirementService } from './requirement.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Requirement } from './skill.model';
@Component({
    selector: 'search',
    templateUrl: './search.html',
    styleUrls: ['./search.css'],
    encapsulation: ViewEncapsulation.None
})

export class SearchComponent implements OnInit {
    skillFile;
    dataSource = new UserDataSource(this.userService);
    displayedColumns = ['title', 'AnyKeys', 'turnAnyKeyOn', 'AllKeys', 'excludeKey', 'Location', 'minExp', 'maxExp', 'minSalary', 'maxSalary', 'propertiesFile'];
    constructor(private userService: RequirementService) { }

    ngOnInit() {
    }

    searchProfiles(){
        let payload = {
            'propertiesFile': this.skillFile
        }
        this.userService.searchProfiles(payload).subscribe((response) => {
            console.log(response);
        })
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