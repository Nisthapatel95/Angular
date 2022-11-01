import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AuthGuard} from './core/guard/auth.guard';
import { AttributeTypesComponent } from './directives-type/attribute-types/attribute-types.component';
import { AttributeComponent } from './directives-type/attribute/attribute.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';

import { ReactiveFormComponent } from './shared/reactive-form/reactive-form.component';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'directives',
    loadChildren: () => import('./directives-type/directives-type.module').then(m => m.DirectivesTypeModule),
    data: {
      // title: 'Employee',
      breadcrumbs: 'directives'
    }
  },
  {
    path: 'list',
    component:AttributeTypesComponent
  },
  {
    path: 'parent',
    component:ParentComponent
  },
   {
    path: 'user-form',
    component:UserFormComponent
   },
   {
    path: 'reactive-form',
    component:ReactiveFormComponent
   },
  {
    path:'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
  },
{
   path: '**', component: PageNotFoundComponent
   },
  //  {
  //   path: 'pipes',
  //   component:CustomPipeComponent
  //  }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
