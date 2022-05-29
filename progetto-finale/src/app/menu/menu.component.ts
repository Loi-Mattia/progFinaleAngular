import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { menuitem } from '../menuitem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  names:string[];
  menuItems:menuitem[] = undefined!;

  constructor(private http: HttpClient){

    this.http.get<menuitem[]>('https://5000-loimattia-progfinaleang-2tqjxe2sdu8.ws-eu46.gitpod.io/').subscribe(data => {
      this.menuItems=data;
      console.log("menuItems", this.menuItems); 
    }) 

    this.names=["pino","mino","rino","luigi","mario","matteo","marco","gianni","giorgio"]
    
    
  }

  ngOnInit(): void {

  }


}
