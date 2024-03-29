import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';
import { Habitacion } from '../Core/Interfaces/habitacion';
import { CrudService } from '../Core/Services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  id: string;
  habitacion: Habitacion;

    constructor(private habitacionSerive : HabitacionesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.habitacionSerive.obtenerElementoPorId(Number(this.id)).subscribe(
      data => {
        this.habitacion = data;
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  modificarHabitacion() {
    console.log(`Se modificará la habitación con id ${this.habitacion.id}`);
  }
}
