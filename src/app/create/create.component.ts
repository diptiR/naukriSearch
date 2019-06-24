import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    "selector": "create-job",
    "templateUrl": "create-job.html",
    "styleUrls": ["./create-job.css"]
})

export class CreateJobComponent implements OnInit {
    jobSpecification: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    createSkill() {
        this.http.post("http://localhost:3000/create-skill", this.jobSpecification.value, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).subscribe((response) => {
            console.log(response);
        })
    }

    ngOnInit() {
        this.jobSpecification = this.fb.group({
            "title": [],
            "anyKeywords": [],
            "turnAnyKeyOn": [],
            "allKeywords": [],
            "excludingKeywords": [],
            "location": [],
            "minExp": [],
            "maxExp": [],
            "minSal": [],
            "maxSal": []
        })
    }

}