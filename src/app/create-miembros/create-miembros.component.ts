import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Importar NgbModal

@Component({
  selector: 'app-create-miembros',
  templateUrl: './create-miembros.component.html',
  styleUrls: ['./create-miembros.component.scss']
})
export class CreateMiembrosComponent implements OnInit {

form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:['',[Validators.required,Validators.maxLength(100)]],
      apelPat:['',[Validators.required,Validators.maxLength(100)]],
      apelMat:['',[Validators.maxLength(100)]],
      fchNac:['',[Validators.maxLength(100)]],
      estadoCivil:['',[Validators.required,Validators.maxLength(100)]],
      direccion:['',[Validators.maxLength(100)]],
      categoria:['',[Validators.required,Validators.maxLength(100)]],
      telefono:['',[Validators.maxLength(100)]],
      correo:['',[Validators.maxLength(100)]],
      fchMatri:['',[Validators.maxLength(100)]],
      sexo: ['', Validators.required]
    });

   }

  ngOnInit(): void {
  }




  dismiss() {
    this.activeModal.dismiss('Dismissed by user');
  }

}
