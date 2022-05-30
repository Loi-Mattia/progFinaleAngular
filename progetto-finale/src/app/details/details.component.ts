import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuitem } from '../menuitem.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  menuItems:menuitem[] = undefined!;



  constructor(private http: HttpClient, private router:Router){

    this.http.get<menuitem[]>('https://5000-loimattia-progfinaleang-zjjclxaji5a.ws-eu46.gitpod.io/').subscribe(data => {
      this.menuItems=data;
      console.log("menuItems", this.menuItems); 
      
    }) 

    
    
  }

  ngOnInit(): void {

  }

}
