import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
  standalone: true
})
export class Form implements OnInit {
  private fb = inject(FormBuilder)

  currentYear: number = 0
  compromisoForm!: FormGroup;

  ngOnInit() {
    this.currentYear = new Date().getFullYear()
    this.compromisoForm = this.fb.group({
      nombre: ['', Validators.required],
      puesto: ['', Validators.required],
      sucursal: ['', Validators.required],
      compromiso: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.compromisoForm.valid) {
      console.log('Formulario enviado:', this.compromisoForm.value);

      alert('¡Formulario enviado con éxito!');
      this.compromisoForm.reset();
    } else {

      Object.keys(this.compromisoForm.controls).forEach(key => {
        this.compromisoForm.get(key)?.markAsTouched();
      });
      alert('Por favor, completa todos los campos');
    }
  }


  get nombre() {
    return this.compromisoForm.get('nombre');
  }

  get puesto() {
    return this.compromisoForm.get('puesto');
  }

  get sucursal() {
    return this.compromisoForm.get('sucursal');
  }

  get compromiso() {
    return this.compromisoForm.get('compromiso');
  }

}
