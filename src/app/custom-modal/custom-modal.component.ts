import { Component, Input } from '@angular/core';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Importar NgbModal

@Component({
  selector: 'app-custom-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" (click)="close()"  aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <ng-container *ngComponentOutlet="dynamicComponent"></ng-container>
    </div>
    <!-- <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="dismiss()">Cancelar</button>
    <button type="button" class="btn btn-primary" (click)="close()">Aceptar</button>
    </div> -->
  `,
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() dynamicComponent!: any; // Recibirá el componente dinámico a mostrar

  constructor(public modal: NgbModal, public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();  // Cierra el modal desde dentro del componente
  }

  dismiss() {
    this.activeModal.dismiss('Dismissed by user');
  }

}
