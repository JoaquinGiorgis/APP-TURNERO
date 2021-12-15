import { Component, OnInit } from '@angular/core';

interface Sucursales {
  name: string;
  address: string;
}

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css'],
})
export class SucursalesComponent implements OnInit {
  public sucursales: Sucursales[] = [
    {
      name: 'S1 - Alta Córdoba',
      address: 'Mariano Fragueiro 1980 - Córdoba, Córdoba',
    },
    {
      name: 'S2 - Cerro',
      address: 'Rafael Nuñez 4675 - Córdoba, Córdoba',
    },
    {
      name: 'S3 - Yofre',
      address: 'Elias Yofre 1050 - Córdoba, Córdoba',
    },
    {
      name: 'S4 - Rivera Indarte',
      address: 'Rivera Indarte 265 - Córdoba, Córdoba<',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
