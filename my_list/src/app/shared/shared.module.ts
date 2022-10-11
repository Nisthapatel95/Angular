import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';




@NgModule({
  declarations: [
    UserFormComponent,
    ReactiveFormComponent,
    
  ],
  imports: [
    CommonModule,
   FormsModule,
   ReactiveFormsModule
  ],
  exports:[
    UserFormComponent,
    
   
  ]

})
export class SharedModule { }
