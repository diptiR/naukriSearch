import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    "selector": "search",
    "templateUrl": "search.html",
    "styleUrls": ["./search.css"]
})

export class SearchComponent implements OnInit {
    displayedColumns: string[] = ['title'];
    data: any = [];
    constructor(private http: HttpClient) { }

    getRepoIssues() {
        return this.http.get("http://localhost:3000/skills");
    }

    ngOnInit() {
        this.getRepoIssues().subscribe((response) => {
            this.data = response;
        })
    }

    search(skill) {
        this.http.post("http://localhost:3000/search-skill", skill, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).subscribe((response) => {
            console.log(response);
        })
    }



}