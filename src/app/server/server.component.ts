import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

	serverId = '10';
  serverName = 'Toyo';
  
  

	allowNewServer = false;

	serverCreationStatus ='No  Server Created';

  constructor() { 
  	setTimeout(()=> {
  		this.allowNewServer = true; 
  	},2000);
  }

  ngOnInit() {
  }


  onCreateServer() {
  	this.serverCreationStatus = 'Server Was created. Name is'  +  this.serverName;
  }

  
}
