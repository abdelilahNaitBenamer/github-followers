import { HttpClient } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInput } from 'src/app/common/bad-input';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,@Inject(String) private url:string) { }

  post(resource:any){
    return this.http.post(this.url,resource)
    .pipe(
      map(data=>{
        return JSON.stringify(data)
      })
      ,catchError(this.handlError))
  }

  getAll(){
    return  this.http.get(this.url)
    .pipe(
      map(data=>{
        return JSON.stringify(data)
      })
      ,catchError(this.handlError))
  }

  findOne(id:number){
    return  this.http.get(this.url+'/'+id)
    .pipe(
      map(data=>{return JSON.stringify(data)})
      ,catchError(this.handlError))
  }

  put(resource:any){
    return this.http.put(this.url+'/'+resource.id, resource)
    .pipe(
      map(data=>{return JSON.stringify(data)})
      ,catchError(this.handlError))
  }

  delete(resource:any){
    return this.http.delete(this.url+'/'+resource.id)
    .pipe(
      map(data=>{return JSON.stringify(data)})
      ,catchError(this.handlError))
  }

  private handlError(error:Response){
    if (error.status === 404) {
      return throwError(new NotFoundError)
    }

    if (error.status === 400) {
      return throwError(new BadInput)
    }

    return throwError(new AppError)
  }
}
