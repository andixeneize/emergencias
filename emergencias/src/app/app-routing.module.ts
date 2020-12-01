import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenseDetailComponent } from './license-detail/license-detail.component';
import { LicenseListComponent } from './license-list/license-list.component';


const routes: Routes = [
  {
    path: "license",
    component: LicenseListComponent
  },
  {
    path: "license/:id",
    component: LicenseDetailComponent
  },
  { path: "**", redirectTo: "license" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
