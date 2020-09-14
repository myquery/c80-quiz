import { Component, OnInit } from '@angular/core';

import {Datasource} from '../datasource'

import {ServicesLayerService} from '../services-layer.service'

@Component({
  selector: 'app-c80-quiz',
  templateUrl: './c80-quiz.component.html',
  styleUrls: ['./c80-quiz.component.css']
})
export class C80QuizComponent implements OnInit{

  quizData : Datasource
  quizColumns = ["seqNo", "questions", "answers"];


  constructor(private dataservice : ServicesLayerService) { }

  ngOnInit(): void {
   this.quizData = new Datasource(this.dataservice);
   this.quizData.loadQuiz(1);
   console.log(this.quizData.loadQuiz(1))
  }

  // getQuiz(){
  //   return this.services.loadQuiz().subscribe(quiz => {
  //     this.quizData = quiz;
  //     console.log(this.quizData);
  //   })
  // }

}
