import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http:HttpClient) { }   // 3eme etape


  getResidences(){     // 4"me etape
    return this.http.get<any[]>('http://localhost:3000/recidences')
  }


  addResdidence(residence:any){
    return this.http.post('http://localhost:3000/recidences',residence)
  }

  SuppResidence(id:number){
   return this.http.delete('http://localhost:3000/recidences'+'/'+id)
  }

  updateResidence(residence:any, id:number){
    return this.http.put('http://localhost:3000/recidences'+'/'+id,residence)
  }
  getResidenceById(id:number){
    return this.http.get('http://localhost:3000/recidences'+'/'+id)
  }
}
