import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { PhotoModel } from '../models/photosModel';

@Component({
  selector: 'app-exibir-dados',
  templateUrl: './exibir-dados.component.html',
  styleUrls: ['./exibir-dados.component.scss']
})
export class ExibirDadosComponent implements OnInit {

  photoItem: PhotoModel;

  constructor(
    private crudService:CrudService
  ) { 
    this.photoItem = new PhotoModel();
  }

  async ngOnInit() {
  
    let id = 1;
    await this.crudService.getPhotoById(id).subscribe(res => {
      this.photoItem = res; 
    });
  
  }


}
