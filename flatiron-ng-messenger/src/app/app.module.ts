import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ContactListComponent } from './contact-list/contact-list.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { ConversationHistoryComponent } from './conversation-history/conversation-history.component';
import { ConversationControlComponent } from './conversation-control/conversation-control.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HighlightDirective } from './highlightdirective/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SenderMessageComponent,
    SendMessageComponent,
    UserMessageComponent,
    ConversationThreadComponent,
    ConversationHistoryComponent,
    ConversationControlComponent,
    HeaderComponent,
    ContactComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
