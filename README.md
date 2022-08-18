# Application Building Lab 2

## Instructions

Now that you've seen how to take the basic HTML elements and corresponding
Bootstrap styles and put them in the right layout, let's go over each one of the
elements you will need and have you build up the application so that it looks
like the wireframe shared previously.

### Dropdown menu

```html
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
    <li><a class="dropdown-item" href="#">Ludovic, Jessica</a></li>
    <li><a class="dropdown-item" href="#">James</a></li>
    <li><a class="dropdown-item" href="#">Aurelie, James, Jessica</a></li>
  </ul>
</div>
```

### Badge (to represent the user's avatar)

```html
<span class="badge bg-secondary">L</span>
```

> There is no "badge" or "avatar" for the current user, as the person viewing
> their messages knows who they are

### Checkbox

```html
<input class="form-check-input" type="checkbox" value="" checked />
```

### Label (to represent a person's message)

```html
<div class="col-8 p-3 border rounded-5">
  <span>Message from Ludovic</span>
</div>
```

> You will adjust the `col-8` class based on. Also, we do want to keep the
> border on for this element, as it will help visually separate one message from
> the next

### Input box

```html
<input type="input" class="form-control" placeholder="Type a message" />
```

As with the previous lab, make your best effort to come up with your own
solution, even though we do share the solution here so that we can have a common
baseline to continue from. Note that struggling to get things working is par for
the course - this is part of how you learn. You have to spend time figuring
things out in order for the concepts you are learning to stick!

When you're done, you should end up with a UI that looks like this - note that
we have kept a few of the border in order to give the overall UI some structure,
but most borders are gone.

![The messaging app with all the components laid out](https://curriculum-content.s3.amazonaws.com/java-mod-8/ng-messaging-ui-styled-incl-components.png)

## Solution

Here are the latest versions of our components' views that correspond to the UI
above:

### Conversation control

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
          <li><a class="dropdown-item" href="#">Ludovic, Jessica</a></li>
          <li><a class="dropdown-item" href="#">James</a></li>
          <li><a class="dropdown-item" href="#">Aurelie, James, Jessica</a></li>
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

### Conversation history

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
```

### Conversation thread

```html
<div class="container">
  <div class="row">
    <div class="col-9 p-3">
      <app-sender-message-component></app-sender-message-component>
    </div>
  </div>
  <div class="row">
    <div class="col-9 p-3">
      <app-sender-message-component></app-sender-message-component>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-3 p-3"></div>
    <div class="col-9 p-3">
      <app-user-message-component></app-user-message-component>
    </div>
  </div>
</div>
```

### Sender messages

```html
<div class="container">
  <div class="row">
    <div class="col-1 p-3">
      <span class="badge bg-secondary">L</span>
    </div>
    <div class="col-8 p-3 border rounded-5">
      <span>Message from Ludovic</span>
    </div>
  </div>
</div>
```

### User messages

```html
<div class="container">
  <div class="row">
    <div class="col-2 p-3"></div>
    <div class="col-10 p-3 border rounded-5">
      <span>Message from Claire</span>
    </div>
  </div>
</div>
```

### Send message

```html
<div class="container">
  <div class="row">
    <div class="col-10 p-3">
      <input type="input" class="form-control" placeholder="Type a message" />
    </div>
    <div class="col-2 p-3">
      <div class="float-end">
        <button class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
```

### Contact list

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      <h3>Contact List</h3>
    </div>
  </div>
  <div class="row">
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

### Contact

```html
<div class="container">
  <div class="row">
    <div class="col-3 p-3">
      <input class="form-check-input" type="checkbox" value="" checked />
    </div>
    <div class="col-9 p-3">Aurelie</div>
  </div>
</div>
```
