import { Component, OnInit} from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { ResponseWrapper } from './models/response-wrapper';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [

    // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 200ms
        query(':enter', stagger('200ms', [
          animate('.2s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 200ms
        query(':leave', stagger('200ms', [
          animate('200ms ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {

  userResponse$: Observable<ResponseWrapper<User[]>>;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers(1);
  }

  // Calls the service to get all the users
  getUsers(page: number): void{
    this.userResponse$ = this.userService.getUsers(page);
  }

  onPageSelection(value: any): void {
    this.getUsers(value);
  }

}
