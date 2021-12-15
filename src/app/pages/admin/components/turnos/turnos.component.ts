import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Turno } from 'src/app/models/turno.model';
import { TurnosService } from '../../../../services/turnos.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css'],
})
export class TurnosComponent implements AfterViewInit, OnInit {
  turnos: Turno[] = [];
  length = this.turnos.length;
  pageSize = 12;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 12];
  showFirstLastButtons = true;

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'mail',
    'sucursal',
    'hora',
    'tipo',
    'tramite',
  ];
  dataSource = new MatTableDataSource<Turno>(this.turnos);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private turnosService: TurnosService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.turnosService.getTurnos().subscribe((arr) => (this.turnos = arr));
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<Turno>(this.turnos);
    }, 1500);
  }

  pageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
  }
}
