import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }	
]

export const routing = RouterModule.forRoot(appRoutes);
