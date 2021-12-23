import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { PhotoModel } from './models/photosModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appCrudObservablesServiceRef';

  photosArray: PhotoModel[] = [];

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {

    this.getDataBasePhotos();

  }

  async getDataBasePhotos() {
    await this.crudService.getPhotos().subscribe(res => {
      this.photosArray = res;
    });

  }

  getPhotoNavigatorPage(id: number) {
    
    
  }
}

//https://jsonplaceholder.typicode.com/

//Usar**
//https://jsonplaceholder.typicode.com/albums/1/photos

//https://jsonplaceholder.typicode.com/posts/1/comments
//https://jsonplaceholder.typicode.com/users/1/albums
//https://jsonplaceholder.typicode.com/users/1/todos
//https://jsonplaceholder.typicode.com/users/1/posts