import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorModule} from '@tinymce/tinymce-angular';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {SnotifyModule, SnotifyPosition, SnotifyService} from 'ng-snotify';
import { ManagerComponent } from './components/manager/manager.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {CoreModule} from './core/core.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { BooksComponent } from './components/books/books.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CongratulationsComponent } from './components/congratulations/congratulations.component';
import { ValidationFormComponent } from './components/validation-form/validation-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TableComponent } from './components/table/table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
export const ToastConfig = {
  global: {
    newOnTop: true,
    maxOnScreen: 8,
    maxAtPosition: 8,
    filterDuplicates: false
  },
  toast: {
    type: 'error',
    showProgressBar: false,
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    bodyMaxLength: 150,
    titleMaxLength: 16,
    backdrop: -1,
    icon: null,
    iconClass: null,
    html: null,
    position: SnotifyPosition.centerBottom,
    animation: {enter: 'fadeIn', exit: 'fadeOut', time: 400}
  },
  type: {
    prompt: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        {text: 'Ok', action: null, bold: true},
        {text: 'Cancel', action: null, bold: false},
      ],
      placeholder: 'Enter answer here...',
      type: 'prompt',
    },
    confirm: {
      timeout: 0,
      closeOnClick: false,
      color: 'black',
      buttons: [
        {text: 'Ok', action: null, bold: true},
        {text: 'Cancel', action: null, bold: false},
      ],
      type: 'confirm',
    },
    simple: {
      type: 'simple'
    },
    success: {
      type: 'success'
    },
    error: {
      showProgressBar: false,
      timeout: 2500,
      type: 'error'
    },
    warning: {
      type: 'warning'
    },
    info: {
      type: 'info'
    },
    async: {
      pauseOnHover: false,
      closeOnClick: false,
      timeout: 0,
      showProgressBar: false,
      type: 'async'
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ManagerComponent,
    LoginComponent,
    CartComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    CongratulationsComponent,
    ValidationFormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SnotifyModule,
    ReactiveFormsModule,
    EditorModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
    DragDropModule,
    ServiceWorkerModule.register('ngsw-config.json', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:3000'
    }),
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule,
  ],
  providers: [ {provide: 'SnotifyToastConfig', useValue: ToastConfig},
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
