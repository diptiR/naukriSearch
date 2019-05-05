import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from "./search.component";

@NgModule({
    imports: [
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatPaginatorModule,
        MatCardModule,
        MatTableModule,
        MatSelectModule
    ],
    declarations: [SearchComponent],
    exports: [SearchComponent]
})

export class SearchModule { }