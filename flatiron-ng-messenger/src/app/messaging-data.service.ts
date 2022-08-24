import { Injectable, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { LoggingService } from "./logging.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MessagingDataService {
  private senderMessages: Message[] = [];
  private userMessages: Message[] = [];

  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  getSenderMessages() {
    this.httpClient.get<Message[]>("http://localhost:8080/api/get-sender-messages").subscribe(
      (messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      }
    )
    return this.senderMessages.slice();
  }

  getUserMessages() {
    this.httpClient.get<Message[]>("http://localhost:8080/api/get-user-messages").subscribe(
      (messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      }
    )
    return this.userMessages.slice();
  }

  addUserMessage(newMessage: Message) {
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  constructor(private loggingService: LoggingService, private httpClient: HttpClient) {
    loggingService.log("Messaging Data Service constructor completed");
  }
}