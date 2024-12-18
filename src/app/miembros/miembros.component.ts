import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { CreateMiembrosComponent } from '../create-miembros/create-miembros.component';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  ngOnInit(): void {
  }


  openMiembroModal() {
    // Llama al método `openModal` del servicio, no `open`
    this.modalService.openModal(CreateMiembrosComponent, 'lg').result.then(
      (result) => {
        console.log('Modal closed with:', result);
      },
      (reason) => {
        console.log('Modal dismissed with:', reason);
      }
    );
  }

  closeModal(modalRef: any) {
    modalRef.close();  // Cierra el modal
  }


}
