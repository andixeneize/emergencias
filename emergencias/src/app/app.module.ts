import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { LicenseListComponent } from './license-list/license-list.component';
import { ReusableToolbarComponent } from './shared/reusable/toolbar/reusable-toolbar.component';
import { ReusableTableComponent } from './shared/reusable/table/reusable-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LicenseService } from './license-service/license.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StatusPipe } from './shared/reusable/status-pipe/status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LicenseDetailComponent,
    LicenseListComponent,
    ReusableToolbarComponent,
    ReusableTableComponent,
    StatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    DatePipe,
    LicenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
