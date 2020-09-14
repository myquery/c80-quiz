import { Component, OnInit } from '@angular/core';

import {Datasource} from '../datasource'
import {Quiz} from '../quiz-data'
import { Observable, throwError } from 'rxjs';

import {ServicesLayerService} from '../services-layer.service'

@Component({
  selector: 'app-c80-quiz',
  templateUrl: './c80-quiz.component.html',
  styleUrls: ['./c80-quiz.component.css']
})
export class C80QuizComponent implements OnInit{

  quizData: any
  quizColumns = ["seqNo", "questions", "answers"];


  constructor(private dataservice : ServicesLayerService) { }

  ngOnInit(): void {
  //  this.quizData = new Datasource(this.dataservice);
   this.quizData = this.dataservice.loadQuiz(1);
   //this.quizData.loadQuiz(1);
   console.log(this.getQuiz())
  }

  getQuiz(){
    return this.dataservice.loadQuiz(1).subscribe(quiz => {
      this.quizData = quiz;
      console.log(this.quizData);
    })
  }

}
