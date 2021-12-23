import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Photo } from './Interfaces/photos';

import { Observable } from 'rxjs';
import { URL_PHOTOS_ALBUM1_API, URL_PHOTO_API } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { PhotoModel } from './models/photosModel';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }


  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(`${URL_PHOTOS_ALBUM1_API}`).pipe(take(1));
  }

  getPhotoById(id:number): Observable<PhotoModel> {
    return this.http.get<PhotoModel>(`${URL_PHOTO_API}/${id}`).pipe(take(1));
  }

}
