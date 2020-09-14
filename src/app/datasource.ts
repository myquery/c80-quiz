import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, of } from 'rxjs';
import {ServicesLayerService} from './services-layer.service'
import { Observable, throwError } from 'rxjs';
import {Quiz} from './quiz-data'
import { catchError, finalize } from 'rxjs/operators';

export class Datasource implements DataSource<Quiz> {

    private quizSubject = new BehaviorSubject<Quiz[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false)

    public loading$ = this.loadingSubject.asObservable()

    constructor(private servicelayer: ServicesLayerService){}

    connect(collectionViewer: CollectionViewer): Observable<Quiz[]> {
         return this.quizSubject.asObservable();
       
      }

      disconnect(collectionViewer: CollectionViewer): void {
          this.quizSubject.complete();
          this.loadingSubject.complete();
  
      }

      loadQuiz(quizId: number, filter =  '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 10){


            this.loadingSubject.next(true);

            this.servicelayer.loadQuiz(quizId, filter, sortDirection, pageIndex, pageSize).pipe(
                catchError(()=> of([])),
                finalize(()=> this.loadingSubject.next(false))
            ).subscribe((quiz)=> this.quizSubject.next(quiz)  )
      }



}
