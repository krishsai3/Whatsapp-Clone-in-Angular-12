import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() conversationClicked = new EventEmitter();
  searchText!: string;
  conversations = [
    {
     name : 'Sai',
     time : '6:00',
     latestMessage : 'Hello World!' ,
     latestMessageRead : true,
     messages : [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
     ],
    },
    {
      name : 'Vam',
      time : '5:00',
      latestMessage : 'Hello Whatsapp!' ,
      latestMessageRead : false,
      messages : [
         { id: 1, body: 'Hello Whatsapp', time: '8:21', me: true },
         { id: 2, body: 'How are you?', time: '8:21', me: false },
         { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
      ],
     },
  ];
  
  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) || 
        conversation.latestMessage
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
