import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, matSelectAnimations, MatSelectModule, MatCheckboxModule, MatAutocompleteModule, MatSliderModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatStepperModule, MatExpansionModule, MatTreeModule, MatTree, MatTableModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { Example1Component } from './components/example1/example1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { TabAccordionsComponent } from './components/tab-accordions/tab-accordions.component';
import { TabTreeComponent } from './components/tab-tree/tab-tree.component';
import { TabTableComponent } from './components/tab-table/tab-table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TabDialogComponent } from './components/tab-dialog/tab-dialog.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    TabAccordionsComponent,
    TabTreeComponent,
    TabTableComponent,
    DialogComponent,
    TabDialogComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatStepperModule,
    MatExpansionModule,
    MatTreeModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogComponent,
    NotificationComponent
  ]
})
export class AppModule { }
