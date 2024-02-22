import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { New01Component } from './new01/new01.component';
import { New02Component } from './new02/new02.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrefixNot } from '@angular/compiler';

const routes: Routes = [
  {path:'',title:'Home',component:AppComponent},
  {path:'new01',title:'Hi How are You',component:New01Component,},
  {path:'new02',title:'Second Page',component:New02Component},
  {path:'**',title:'Page Not Found',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
