import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateJobComponent } from './create/create.component';
import { CreateModule } from './create/create.module';
import {MatButtonModule} from '@angular/material/button';
import { SearchModule } from './search/search.module';
import { SearchComponent } from './search/search.component';

const ROUTES = [
  { path: "create-job", component: CreateJobComponent },
  { path: "search", component: SearchComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],  
  imports: [
    MatButtonModule,
    BrowserModule,
    CreateModule,
    SearchModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
