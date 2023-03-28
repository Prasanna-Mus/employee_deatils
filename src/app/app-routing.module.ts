import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 { path:'', redirectTo:'/home', pathMatch:'full'},
 { path:'home', component:HomeComponent},
 { path:'home/:id/:name', component:HomeComponent},
 { path:'users', component:UsersComponent},
 { path:'users/:id/:name', component:UsersComponent},
 { path:'categories', component:CategoriesComponent},
 { path:'categories/:name', component:CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
