import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { C80QuizComponent } from './c80-quiz/c80-quiz.component';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';

const routes: Routes = [ 
  {path:'', component: QuizHomeComponent},
  {path:'quiz', component:C80QuizComponent}

]



@NgModule({
  declarations: [
    QuizHomeComponent,
    C80QuizComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
