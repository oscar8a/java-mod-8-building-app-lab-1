package com.messenger.simpleapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MessagingController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-user-messages")
    public List<Message> getUserMessages() {
        List<Message> messages = new ArrayList<Message>();
        messages.add(
                new Message(
                        new User("Aurelie"),
                        "Message from Lilly",
                        1, 2
                )
        );
        return messages;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-sender-messages")
    public List<Message> getSenderMessages() {
        List<Message> messages = new ArrayList<Message>();
        messages.add(
                new Message(
                        new User("Ludovic", true),
                        "Message from Ludo",
                        1, 0
                )
        );
        messages.add(
                new Message(
                        new User("Jessica", false),
                        "Message from Jess",
                        1, 1
                )
        );
        return messages;
    }
}

class Message {
    public User sender;
    public String text;
    public int conversationId;
    public int sequenceNumber;

    public Message(User sender, String text, int conversationId, int sequenceNumber){
        this.sender = sender;
        this.text = text;
        this.conversationId = conversationId;
        this.sequenceNumber = sequenceNumber;
    }

}

class User {
    public String firstName;
    public boolean isOnline = false;

    public User(String firstName) {
        this.firstName = firstName;
    }

    public User(String firstName, boolean isOnline) {
        this.firstName = firstName;
        this.isOnline = isOnline;
    }
}