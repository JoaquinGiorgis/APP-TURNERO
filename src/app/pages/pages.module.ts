import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { TurneroComponent } from './turnero/turnero.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material.module';
import { ChartComponent } from './admin/components/chart/chart.component';
import { SucursalesComponent } from './admin/components/sucursales/sucursales.component';
import { TurnosComponent } from './admin/components/turnos/turnos.component';
import { ChartsModule } from 'ng2-charts';
import { PaginatePipe } from '../pipes/paginate.pipe';

@NgModule({
  declarations: [
    PagesComponent,
    AdminComponent,
    NopagefoundComponent,
    TurneroComponent,
    ChartComponent,
    SucursalesComponent,
    TurnosComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
