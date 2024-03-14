import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distrito-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './distrito-update-form.component.html',
  styleUrl: './distrito-update-form.component.css'
})
export class DistritoUpdateFormComponent {
  ciudades: any[] = [];
  distritoForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CiudadID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getCiudades().subscribe({
      next: (data) => {
        console.log(data);
        this.ciudades = data;
        console.log(this.ciudades);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  update() {
    const Nombre = this.distritoForm.value.Nombre;
    const CiudadID = this.distritoForm.value.CiudadID;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (Nombre && CiudadID && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateDistrito(Nombre, CiudadID, id).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/distritos']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
