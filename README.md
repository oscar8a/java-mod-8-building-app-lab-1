# Modeling Data

## Learning Goals

- Model the data for the application.

## Introduction

Our messaging application deals with the following data elements:

1. Users: for simplicity’s sake, users in this sample application only have a
   first name.
2. Conversations: conversations have a list of conversations, with each
   conversation having:
   1. A list of users in the conversation
   2. An ID
3. Messages: messages have:
   1. A sender.
   2. Text.
   3. Their conversation ID.
   4. A sequence number that indicates where they fit in the conversation.

Each component is responsible for managing its own data. In a later section, we
will cover how to share data between components.

We need to model data for the following components:

1. Header: this component will need the "active" user
2. Conversation control: this component will need a list of conversations
3. Conversation thread: this component will need a list of messages
4. Contact List: this component will need a list of users

## Active User

In `header-component.component.ts`, create a variable for the active user:

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-component",
  templateUrl: "./header-component.component.html",
  styleUrls: ["./header-component.component.css"],
})
export class HeaderComponentComponent implements OnInit {
  activeUser = {
    firstName: "Maria",
  };

  constructor() {}

  ngOnInit(): void {}
}
```

Then in the `header-component.component.html` view, replace the hardcoded
reference to "Claire" with a reference to the `activeUser` variable, using the
data binding notation we learned earlier:

```html
<div class="container">
  <div class="row">
    <div class="col-9 p-3">
      <h2>Welcome, {{ activeUser.firstName }}</h2>
    </div>
    <div class="col-3 p-3 float-end">
      <div class="float-end">
        <button class="btn btn-primary">Logout</button>
      </div>
    </div>
  </div>
</div>
```

You should see your UI update to whatever name you set for `activeUser` - use a
name other than "Claire" to make sure the change was made properly

## List of users

For the list of users, we need the contact list component to have a list of
users and to loop through that list of users to create a user component for each
user in the list.

First, we add the list of users to `contact-list-component.component.ts`:

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-list-component",
  templateUrl: "./contact-list-component.component.html",
  styleUrls: ["./contact-list-component.component.css"],
})
export class ContactListComponentComponent implements OnInit {
  users = [
    { firstName: "Aurelie" },
    { firstName: "James" },
    { firstName: "Jessica" },
    { firstName: "Ludovic" },
    { firstName: "Maria" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
```

Then, we change the view `contact-list-component.component.html` to go through
each user in the `users` array with the `*ngFor` directive we studied earlier:

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <h3>Contact List</h3>
    </div>
  </div>
  <div class="row" *ngFor="let user of users">
    <div class="col-12 border p-3">
      <app-contact-component></app-contact-component>
    </div>
  </div>

  <div class="row">
    <div class="col-12 border p-3">
      <app-contact-component></app-contact-component>
    </div>
  </div>
  <div class="row">
    <div class="col-9"></div>
    <div class="col-3 p-3">
      <div class="float-end">
        <button class="btn btn-primary">Start Message</button>
      </div>
    </div>
  </div>
</div>
```

You should now see a list of users in your contact list, but we have a problem.
The child contact component does not know which user in the parent's contact
list component is the current user, which is why you see the right number of
users in the contact list, but they all have the same hardcoded name.

![Contact List with hardcoded names](https://curriculum-content.s3.amazonaws.com/java-mod-8/ng-messaging-contact-list-hardcoded-names.png)

We need to use property binding and the `@input` annotation in order to let the
parent component pass information to the child component.

First, we need to add a `user` variable to the contact component in
`contact-component.component.ts`:

```typescript
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-component",
  templateUrl: "./contact-component.component.html",
  styleUrls: ["./contact-component.component.css"],
})
export class ContactComponentComponent implements OnInit {
  @Input() user = {
    firstName: "default",
  };

  constructor() {}

  ngOnInit(): void {}
}
```

We decorate the `user` variable with the `@Input` annotation to indicate that a
parent component can set this property through property binding.

Next, we add property binding to the `app-content-component` in the `*ngFor`
loop in the `contact-list-component.component.html` view:

```html
<div class="row" *ngFor="let user of users">
  <div class="col-12 border p-3">
    <app-contact-component [user]="user"></app-contact-component>
  </div>
</div>
```

The `*ngFor` loop tells Angular to go through every entry in the `users` array
and to assign the current value in each iteration of the loop to the `user`
variable. Then the `[user]` property binding on the `<app-contact-component>`
reference tells Angular to look for a `@Input` entry in the contact component
model and set it to the value of the `user` variable in the `*ngFor` loop.

The full view for the contact list component now looks like this:

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <h3>Contact List</h3>
    </div>
  </div>
  <div class="row" *ngFor="let user of users">
    <div class="col-12 border p-3">
      <app-contact-component [user]="user"></app-contact-component>
    </div>
  </div>

  <div class="row">
    <div class="col-12 border p-3">
      <app-contact-component></app-contact-component>
    </div>
  </div>
  <div class="row">
    <div class="col-9"></div>
    <div class="col-3 p-3">
      <div class="float-end">
        <button class="btn btn-primary">Start Message</button>
      </div>
    </div>
  </div>
</div>
```

And the UI should give you a list of all the contacts, with the right names
filled in:

![Contact list with dynamic names](https://curriculum-content.s3.amazonaws.com/java-mod-8/ng-messaging-contact-list-dynamic-names.png)

## Conversations

Following the same pattern as before, let's add a `conversations` variable to
the `conversation-control-component.component.ts` file:

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-conversation-control-component",
  templateUrl: "./conversation-control-component.component.html",
  styleUrls: ["./conversation-control-component.component.css"],
})
export class ConversationControlComponentComponent implements OnInit {
  conversations = [
    {
      id: 1,
      users: [
        { firstName: "Claire" },
        { firstName: "Ludovic" },
        { firstName: "Jessica" },
      ],
    },
    {
      id: 2,
      users: [{ firstName: "Claire" }, { firstName: "James" }],
    },
    {
      id: 3,
      users: [
        { firstName: "Claire" },
        { firstName: "Aurelie" },
        { firstName: "James" },
        { firstName: "Jessica" },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
```

Now we can replace our hardcoded values in the
`conversation-control-component.component.html` view with an `*ngFor` loop:

```html
<ul class="dropdown-menu">
  <li *ngFor="let conversation of conversations">
    <a class="dropdown-item" href="#">
      <span
        *ngFor="let user of conversation.users; 
                    let isLastConversation = last"
      >
        {{ user.firstName }}
        <span *ngIf="!isLastConversation">, </span>
      </span>
    </a>
  </li>
</ul>
```

We do introduce a new concept here:

1. In an `*ngFor` loop, we can ask Angular to let us know if the current element
   is the last element in an array: `let isLastConversation = last`
2. We can then use that boolean value in an `*ngIf` directive to determine
   whether or not to display a "," after the name of the user in the
   conversation: `<span *ngIf="!isLastConversation">, </span>`

This is what the full view for `conversation-control-component.component.html`
is:

```html
<div class="container">
  <div class="row">
    <div class="col-9">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Conversation
        </button>
        <ul class="dropdown-menu">
          <li *ngFor="let conversation of conversations">
            <a class="dropdown-item" href="#">
              <span
                *ngFor="let user of conversation.users; 
                                    let isLastConversation = last"
              >
                {{ user.firstName }}
                <span *ngIf="!isLastConversation">, </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-3">
      <div class="float-end">
        <button class="btn btn-primary">New Message</button>
      </div>
    </div>
  </div>
</div>
```