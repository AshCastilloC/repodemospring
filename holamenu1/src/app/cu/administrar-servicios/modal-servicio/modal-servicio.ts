import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-servicio',
  imports: [FormsModule],
  templateUrl: './modal-servicio.html',
  styleUrl: './modal-servicio.css',
})
export class ModalServicio {
  servicio = input<any>();
  cerrar = output<void>();
  guardar = output<any>();

  guardarCambios() {
    this.guardar.emit(this.servicio());
  }
}
