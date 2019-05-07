import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CreateJobComponent } from "./create.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatSelectModule
    ],
    declarations: [CreateJobComponent],
    exports: [CreateJobComponent]
})

export class CreateModule { }