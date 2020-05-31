import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule, MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import { NotificationComponent } from './components/notification/notification.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    NotificationComponent
  ],
  entryComponents: [
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: MatSnackBarRef,
    useValue: {}
    }, {
    provide: MAT_SNACK_BAR_DATA,
    useValue: {}
    }],
  exports: [
    NotificationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

