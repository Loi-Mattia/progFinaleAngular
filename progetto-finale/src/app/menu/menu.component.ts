import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  names:string[];
  constructor() { 
    this.names=["pino","mino","rino","luigi","mario","matteo","marco","gianni","giorgio"]
  }
  ngOnInit(): void {
  }

}
