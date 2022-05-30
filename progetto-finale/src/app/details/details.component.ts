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
    var str = new String(process.env.NG_APP_URL) 
    var splits1 = str.substring(0, 8)
    var splits2 = str.substring(8,)
    var str3 = splits1+5000+"-"+splits2
    console.log(str3)
    this.http.get<menuitem[]>(str3).subscribe(data => {
      this.menuItems=data;
      console.log("menuItems", this.menuItems); 
    
    }) 

    
    
  }

  ngOnInit(): void {

  }
  routing(){
    this.router.navigate(['/details']);
}

}
