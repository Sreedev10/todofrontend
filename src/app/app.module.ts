import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallComponent } from './viewall/viewall.component';
import { DeletelistComponent } from './deletelist/deletelist.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const myroutes=[
  {path:"",component:AddtodoComponent},
  {path:"delete",component:DeletelistComponent},
  {path:"view",component:ViewallComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    NavbarComponent,
    ViewallComponent,
    DeletelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
