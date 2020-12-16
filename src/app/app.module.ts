import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { LikeComponent } from './like/like.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestComponent } from './guest/guest.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { CollapseContentComponent } from './collapse-content/collapse-content.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
// import { SignupComponent } from './signup/signup.component';
import { FormPractiseComponent } from './form-practise/form-practise.component';
import { FormPractiseReactiveComponent } from './form-practise-reactive/form-practise-reactive.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    LikeComponent,
    GuestListComponent,
    GuestComponent,
    InputFormatDirective,
    CollapseContentComponent,
    ContactFormComponent,
    CourseFormComponent,
    // SignupComponent,
    FormPractiseComponent,
    FormPractiseReactiveComponent,
    NewCourseComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
