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
  names:string[];
  menuItems:menuitem[] = undefined!;
  


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

    this.names=["pino","mino","rino","luigi","mario","matteo","marco","gianni","giorgio"]
    //NG_APP_URL=$GITPOD_WORKSPACE_URL ng serve --disable-host-check
    
  }

  ngOnInit(): void {

  }
  
  routing(){
    this.router.navigate(['/details']);
}


}
