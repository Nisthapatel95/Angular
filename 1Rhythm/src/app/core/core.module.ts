import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './auth.service';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers:[
    AuthGuard,
    AuthService
    
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
