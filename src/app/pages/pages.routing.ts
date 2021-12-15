import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { TurneroComponent } from './turnero/turnero.component';
import { PagesComponent } from './pages.component';
import { LoginGuardService } from '../auth/login/login-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardService],
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'turnero', component: TurneroComponent },
    ],
  },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
