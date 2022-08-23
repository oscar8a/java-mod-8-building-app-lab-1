# Lab 2

## Instructions

Using what you've learned about components and services, create a new component
that will display the number of messages sent by the active user.

Here are a few hints:

1. Your new component can be positioned below the user message component at the
   bottom of the conversation history panel
2. It can be a simple label that shows the text "total message(s): " and then
   the number of messages sent by the active user
3. You already have a service that handles the sending of messages - integrate
   with that service to get your component access to the information it's
   looking for

Here is the solution:

1. In your `messaging-data.service.ts`, you already have a `addUserMessage()`
   function - no messages get sent through your application without going
   through this function.
2. Furthermore, that function already emits an event after it's done handling
   the requested message
3. So all we need to do in our new component is subscribe to the existing event
   and use the corresponding data to update a local variable with the active
   number of messages
4. We then simply use `{{ }}` notation to bind to that variable in our view

Here is the code for this solution:

> Note: we used the following CLI command to generate the new component:
> `ng g c application-component/conversation-history-component/message-count-component`

- Inject the `MessagingDataService` into the message count component:

```typescript
import { Component, OnInit } from "@angular/core";
import { MessagingDataService } from "src/app/messaging-data.service";
import { Message } from "src/app/message.model";

@Component({
  selector: "app-message-count-component",
  templateUrl: "./message-count-component.component.html",
  styleUrls: ["./message-count-component.component.css"],
})
export class MessageCountComponentComponent implements OnInit {
  sentMessageCount = 0;

  constructor(private messagingSvce: MessagingDataService) {}

  ngOnInit(): void {
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      this.sentMessageCount = messages.length;
    });
  }
}
```

- Add our simple text to the view for our message count component:

```html
total message(s): {{ sentMessageCount }}
```

- Add the message count component to the conversation history component in
   `conversation-history-comopnent.component.html`:

```html
<div class="container">
  <div class="row">
    <div class="col-12 p-3">Ludovic, Jessica</div>
  </div>
  <div class="row">
    <div class="col-12 border p-3">
      <app-conversation-thread-component></app-conversation-thread-component>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-12 p-3">
      <app-send-message-component></app-send-message-component>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-12 p-3">
      <app-message-count-component></app-message-count-component>
    </div>
  </div>
</div>
```

- Remove the `message-count-component.component.spec.ts` file, since we won't
   be writing unit tests for this component