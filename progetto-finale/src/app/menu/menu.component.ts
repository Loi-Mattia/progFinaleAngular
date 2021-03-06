import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { menuitem } from '../menuitem.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  stars(i: number) { return new Array(i); }
  
  menuItems:menuitem[] = undefined!;
    //pip install flask
    //pip install flask_cors
    //pip install pymongo
    //pip install flask_pymongo


  constructor(private http: HttpClient, private router:Router){
    var str = new String(process.env.NG_APP_URL) 
    var splits1 = str.substring(0, 8)
    var splits2 = str.substring(8,)
    var str3 = splits1+5000+"-"+splits2
    console.log(str3)
    this.http.get<menuitem[]>(str3).subscribe(data => {
      this.menuItems=data;
      console.log("menuItems", this.menuItems); 
    
    }) 

    //NG_APP_URL=$GITPOD_WORKSPACE_URL ng serve --disable-host-check
    //npm install leaflet@1.7.1
  }

  ngOnInit(): void {

  }
  
  routing(_id: string){
    this.router.navigate(['/details/' + _id ]);
 
}


}
