import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    "selector": "create-job",
    "templateUrl": "create-job.html",
    "styleUrls": ["./create-job.css"]
})

export class CreateJobComponent implements OnInit {
    jobSpecification: FormGroup;

    constructor(private fb: FormBuilder) { }

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