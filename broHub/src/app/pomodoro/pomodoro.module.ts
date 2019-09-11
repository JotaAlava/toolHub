import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PomodoroPage } from './pomodoro.page';
import { PomodoroService } from 'src/app/pomodoro/pomodoro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PomodoroPage
      }
    ])
  ],
  declarations: [PomodoroPage],
  providers: [PomodoroService]
})
export class PomodoroModule {}
