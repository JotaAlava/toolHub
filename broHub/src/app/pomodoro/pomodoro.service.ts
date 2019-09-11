import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

class Tomato {
    public description: string;
    public started: Date;
    public ended: Date;
    public project: string;
}

@Injectable()
export class PomodoroService {
    public pomodoros: BehaviorSubject<Array<Tomato>> = new BehaviorSubject<Array<Tomato>>([]);

    constructor() {
        this.loadPomodoros();
    }

    public loadPomodoros() {
        let tom: Tomato = {
            description: "description",
            started: new Date(),
            ended: new Date(),
            project: "1"
        };
        
        this.pomodoros.next([tom]);
    }
}