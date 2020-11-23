import { CustomPipe } from './custom.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { LikeComponent } from './like/like.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    StarComponent,
    LikeComponent,
    GuestListComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
