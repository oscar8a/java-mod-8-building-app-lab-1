import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  @Input() message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
