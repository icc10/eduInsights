// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Class } from '../entities/class';
//
// const baseUrl = 'http://localhost:8080/api/class';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ClassService {
//
//   constructor(private http: HttpClient) { }
//
//   create(data: any): Observable<any>{
//     return this.http.post(baseUrl, data);
//   }
//
//   get(id: any): Observable<Class[]> {
//     return this.http.get<Class[]>(`${baseUrl}/${id}`);
//   }
//
//   update(id: any, data: any): Observable<any> {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }
//
//   delete(id: number) {
//     return this.http.delete<Class[]>(`${baseUrl}/${id}`);
//   }
// }
