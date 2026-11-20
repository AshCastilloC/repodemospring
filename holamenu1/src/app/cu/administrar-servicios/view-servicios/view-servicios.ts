import { Component } from '@angular/core';
import { ModalServicio } from '../modal-servicio/modal-servicio';

@Component({
  selector: 'app-view-servicios',
  imports: [ModalServicio],
  templateUrl: './view-servicios.html',
  styleUrl: './view-servicios.css',
})
export class ViewServicios {
  servicios = [
  { id: 1, nombre: 'Mantenimiento', precio: 150, descripcion: 'Revisión general' },
  { id: 2, nombre: 'Reparación', precio: 200, descripcion: 'Reparación de equipos' },
  { id: 3, nombre: 'Instalación', precio: 100, descripcion: 'Instalación de equipos' },
  { id: 4, nombre: 'Asesoría', precio: 80, descripcion: 'Asesoramiento técnico' }
];

  mostrarModal = false;
  servicioSeleccionado: any = null;

  editarServicio(servicio: any) {
    this.servicioSeleccionado = { ...servicio };
    this.mostrarModal = true;
  }

  guardarServicio(servicio: any) {
    console.log('Servicio guardado:', servicio);
    const posicion = this.servicios.findIndex(s => s.id === servicio.id);
    if (posicion !== -1) {
      this.servicios[posicion] = { ...servicio };
    }
    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.servicioSeleccionado = null;
  }
}
