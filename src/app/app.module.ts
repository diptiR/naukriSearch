import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateJobComponent } from './create/create.component';
import { CreateModule } from './create/create.module';
import {MatButtonModule} from '@angular/material/button';

const ROUTES = [
  { path: "create-job", component: CreateJobComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    CreateModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
