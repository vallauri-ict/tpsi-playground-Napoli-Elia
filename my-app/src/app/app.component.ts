import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Barak Opoli","Antonio Conte","Marcello Rossi","Alberto Barbero","Debora Servetti","Paolo Cortese","Paolino Paperino"];
  myName='Napoli Elia'

  changeName(){
    this.myName=this.names[Math.floor(Math.random()*7)];
  }
}
