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
    this.myName=this.names[this.getRandomInt(0,7)];
  }
  getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }
}
