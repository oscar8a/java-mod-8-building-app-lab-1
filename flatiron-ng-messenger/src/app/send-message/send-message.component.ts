import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { MessagingDataService } from '../messaging-data.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messageString: string;

  loggingService = new LoggingService();

  constructor(private messagingService: MessagingDataService) { }

  ngOnInit(): void { }

  onSendMessage() {
    this.loggingService.log("Send following message: ");
    this.loggingService.log(this.messageString);

    this.messagingService.addUserMessage(
      {
      sender: { firstName: "Aurelie" },
      text: this.messageString,
      conversationId: 1,
      sequenceNumber: 2,
      }
    );
  }
}
