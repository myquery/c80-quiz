import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap  } from 'rxjs/operators';
import {Quiz} from './quiz-data'



@Injectable({
  providedIn: 'root'
})
export class ServicesLayerService{

  constructor(private http: HttpClient) { 

  
  }


  loadQuiz( quizId:number, filter = '', sortOrder = 'asc',
  pageNumber = 0, pageSize = 10):Observable<Quiz[]>{
    return this.http.get<Quiz[]>('/assets/trivia.json', {
      params : new HttpParams()
      .set('id', quizId.toString())
      .set('filter', filter)
      .set('sortOrder', sortOrder)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
    }).pipe(
      map(res => res["payload"])
    );
}

}

