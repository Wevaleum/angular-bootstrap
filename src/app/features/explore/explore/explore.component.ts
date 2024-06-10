import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import { User } from '../../../core/models/user-model';
import { tap } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [NgFor],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .pipe(tap(x => this.users = x.content))
      .subscribe();
  }

}
