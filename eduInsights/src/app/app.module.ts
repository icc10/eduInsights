import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseViewComponent } from './choose-view/choose-view.component';
import { InstructorViewComponent } from './instructor-view/instructor-view.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseViewComponent,
    InstructorViewComponent,
    StudentViewComponent,
    AboutComponent,
    HowToUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
