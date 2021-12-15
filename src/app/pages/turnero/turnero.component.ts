import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Router } from '@angular/router';
import { Turno } from 'src/app/models/turno.model';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.component.css'],
})
export class TurneroComponent implements OnInit {
  //variables
  selectedOffice: String;
  selectedType: String;
  selectedHour: String;
  formGroup: FormGroup;
  minDate: Date;
  maxDate: Date;
  hoursArray: string[] = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ];
  tramitesArray: String[] = [
    'Débito Automático',
    'Entrega de Tarjeta',
    'Gestión de Clave',
    'Otras Gestiones',
    'Pago de resumen',
    'Préstamo',
  ];
  sucursalesArray: String[] = [
    'Alta Córdoba',
    'Cerro',
    'Yofre',
    'Rivera Indarte',
  ];
  name: String;
  lastname: String;
  dni: String;
  presence: String;
  office: String;
  email: String;
  phone: String;
  type: String;
  date: String;
  hour: String;
  usuarios: String;
  turno: Turno;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public store: Store<AppState>,
    private router: Router,
    private turnosService: TurnosService
  ) {
    const currentDay = Date.now();
    this.minDate = new Date(currentDay);
    this.maxDate = new Date(currentDay + 2629750000 * 2);
  }

  ngOnInit(): void {
    this.store.select('usuario').subscribe((usuario) => {
      this.name = usuario.user.nombre;
      this.lastname = usuario.user.apellido;
      this.dni = usuario.user.dni;
    });

    this.buildForm();
  }

  //crea un formulario formado por un array de 3 formularios (uno por cada step)
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          name: [this.name, [Validators.required]],
          lastname: [this.lastname, [Validators.required]],
          dni: [this.dni, [Validators.required]],
        }),
        this.formBuilder.group({
          presence: ['', [Validators.required]],
          office: ['', []],
          email: ['', [Validators.email || Validators.nullValidator]],
          phone: ['', []],
        }),
        this.formBuilder.group({
          type: ['', [Validators.required]],
          date: ['', [Validators.required]],
          hour: ['', [Validators.required]],
        }),
      ]),
    });
  }

  //corrobora que los campos esten completos para avanzar al siguiente stepper
  isCompleted(index) {
    const value = this.formGroup.value.formArray[index];
    if (index === 0) {
      if (value.name && value.lastname && value.dni) return true;
      else return false;
    }
    if (index === 1) {
      if (value.presence === 'virtual' && value.email && value.phone)
        return true;
      if (value.presence === 'presencial' && value.office) return true;
      else return false;
    }
    if (index === 2) {
      if (value.type && value.date && value.hour) return true;
      else return false;
    }
  }

  //Boton Save
  save(event: Event) {
    event.preventDefault();
    const value = this.formGroup.value.formArray;
    this.name = value[0].name;
    this.lastname = value[0].lastname;
    this.dni = value[0].dni;
    this.presence = value[1].presence;
    this.office = value[1].office;
    this.email = value[1].email;
    this.phone = value[1].phone;
    this.type = value[2].type;
    this.date = value[2].date;
    this.hour = value[2].hour;
  }

  //filtro para deshabilitar sabados y domingos del calendario
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  finish = () => {
    this.snackBar.open('Turno guardado con éxito', '', { duration: 2000 });

    const value = this.formGroup.value.formArray;
    this.turno = {
      nombre: value[0].name,
      apellido: value[0].lastname,
      dni: value[0].dni,
      sucursal: value[1].office,
      mail: value[1].email,
      hora: value[2].hour,
      dia: value[2].date,
      tipo: value[1].presence,
      tramite: value[2].type,
    };

    this.turnosService.postTurnos(this.turno).subscribe((turno) => turno);

    //aca deberia ir un link para redirigir la app a otra vista
    this.router.navigate(['/login']);
  };
}
