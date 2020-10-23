import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean=false;
  serverCreationStatus='Nessun Server è stato creato';
  serverName="- digita qui il nome del nuovo server -";
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }
  createServer(){
    this.serverCreationStatus=' Il Server '+this.serverName+' è stato creato';
    this.serverName="- digita qui il nome del nuovo server -";
  }
  onUpdateServerName(event:any){
    this.serverName=event.target.value;
  }
}
