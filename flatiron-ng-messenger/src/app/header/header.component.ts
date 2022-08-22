import { Component, OnInit } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeUser: User = {
    firstName: "Maria",
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
