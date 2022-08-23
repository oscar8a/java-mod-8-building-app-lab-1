import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-conversation-thread',
  templateUrl: './conversation-thread.component.html',
  styleUrls: ['./conversation-thread.component.css']
})
export class ConversationThreadComponent implements OnInit {

  senderMessages: Message[];
  userMessages: Message[];

  constructor(private messagingService: MessagingDataService) { }

  ngOnInit(): void {
    this.senderMessages = this.messagingService.getSenderMessages();
    this.userMessages = this.messagingService.getUserMessages();

    this.messagingService.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.userMessages = messages;
    });
  }
}
