// import { Injectable, NgZone } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, Subscription, BehaviorSubject } from 'rxjs';

// export class Tomato {
//     public description: string;
//     public started: Date;
//     public ended: Date;
//     public project: string;
// }

// @Injectable()
// export class PomodoroService {
//     public pomodoros: BehaviorSubject<Array<Tomato>> = new BehaviorSubject<Array<Tomato>>([]);

//     constructor(private http: HttpClient) {
//         this.getPomodoros();
//     }

//     public getPomodoros() {
//         let tom: Tomato = {
//             description: "description",
//             started: new Date(),
//             ended: new Date(),
//             project: "1"
//         };
        
//         this.pomodoros.next([tom]);
//     }

//     public postTomato(tomato: Tomato) {
        
//     }
// }