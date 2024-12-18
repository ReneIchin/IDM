import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private modalService: NgbModal) {}

  openModal(dynamicComponent: any, size: 'sm' | 'lg' | 'xl' = 'lg') {
    const modalOptions: NgbModalOptions = {
      size: size,
      backdrop: 'static',
      keyboard: true,
    };

    const modalRef = this.modalService.open(CustomModalComponent, modalOptions);
    (modalRef.componentInstance as CustomModalComponent).dynamicComponent = dynamicComponent;

    return modalRef;
  }
  // Método para cerrar el modal desde el servicio
  closeModal(modalRef: any) {
    modalRef.close(); // Cierra el modal
  }
}
