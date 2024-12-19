import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { CreateMiembrosComponent } from '../create-miembros/create-miembros.component';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent implements OnInit {

  territorios : any;
  selectedTerritorio: string | null = null;

  distritos: any;
  selectedDistritos : string | null = null;

  iglesias: any;
  selectedIglesias : string | null = null;

  miembros : any;

  constructor(private modalService: ModalServiceService, private apiService : ApiServiceService) {   }

  ngOnInit(): void {
   
    this.apiService.get('Territorios/GetTerritorioList').subscribe(
      data =>{

        this.territorios = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  onTerritorioChange(){ //obtener los distritos del territorio correspondiente

    if(this.selectedTerritorio){
      this.apiService.get('Distritos/GetDistritosList/' + this.selectedTerritorio ).subscribe(
        data =>{
          this.distritos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.distritos = [];
    }
  }

  onDistritosChange(){ //obtener las iglesias correspondientes en base a al distrito
    if(this.selectedDistritos){
      this.apiService.get('Iglesias/GetIglesiasList/' + this.selectedDistritos ).subscribe(
        data =>{
          this.iglesias = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.iglesias = [];
    }
  }


  onGetMiembros(){

    if(this.selectedIglesias){

      const datos = { TIPO: 'GET_MIEMBROS_ALL' , ID : null, IGLESIA_ID: this.selectedIglesias, CATEGORIA_ID: null, STATUS: 0 };

      this.apiService.getObject('Miembros/GetMiembroList/', datos ).subscribe(
        data =>{
          this.miembros = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );

    }else{
      this.miembros = [];
    }

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


  

}
