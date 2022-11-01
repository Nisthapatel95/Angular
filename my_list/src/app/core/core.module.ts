import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { AuthService } from './service/auth.service';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { UserGuard } from './guard/user.guard';
import { AuthGuard } from './guard/auth.guard';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers:[

    AuthService,
    CanDeactivateGuard,
    UserGuard,
    AuthGuard
  ],
  exports:[
    HeaderComponent,
  ]
})
export class CoreModule { }
