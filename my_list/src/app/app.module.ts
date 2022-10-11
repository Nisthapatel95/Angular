import { Attribute, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';

import { HomeComponent } from './home/home.component';
import { DirectivesTypeModule } from './directives-type/directives-type.module';
import { SidbarComponent } from './sidbar/sidbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildComponent } from './parent/child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    SidbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesTypeModule,
    CoreModule,


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
