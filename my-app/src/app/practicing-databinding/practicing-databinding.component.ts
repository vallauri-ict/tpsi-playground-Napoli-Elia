import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {
  name='';
  buttonEnabled=false;
  constructor() { }

  ngOnInit(): void {
  }
  onUpdateName(){
    if(this.name=='')
      this.buttonEnabled=false;
    else
      this.buttonEnabled=true;
  }
  clearName(){
    this.name='';
  }
}
