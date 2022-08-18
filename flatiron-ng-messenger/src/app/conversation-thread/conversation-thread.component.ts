import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-thread',
  templateUrl: './conversation-thread.component.html',
  styleUrls: ['./conversation-thread.component.css']
})
export class ConversationThreadComponent implements OnInit {
  userMessages = [
    {
      sender: { firstName: "Aurelie" },
      text: "Message from Aurelie",
      conversationId: 1,
      sequenceNumber: 2,
    }
  ];

  senderMessages = [
    {
      sender: { firstName: "Ludovic" },
      text: "sender message 1 - Ludovic",
      conversationId: 1,
      sequenceNumber: 0
    },
    {
      sender: { firstName: "Jessica" },
      text: "sender message 2 - Jessica",
      conversationId: 1,
      sequenceNumber: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
