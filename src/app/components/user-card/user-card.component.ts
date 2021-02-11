import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  constructor() { }

  @Input()
  set userData(value: any) {
    this.id = value.id;
    this.avatar = value.avatar;
    this.firstName = value.first_name;
    this.lastName = value.last_name;
    this.email = value.email;
  }

  ngOnInit(): void {
  }

}
