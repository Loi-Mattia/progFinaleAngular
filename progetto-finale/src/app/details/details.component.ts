import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuitem } from '../menuitem.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

  id: string="";
  
  itemDetails :menuitem = undefined!;
  

  constructor(private route: ActivatedRoute,private http: HttpClient){
    console.log("1")
  }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.id = params['id']; 
      
      var str = new String(process.env.NG_APP_URL) 
      var splits1 = str.substring(0, 8)
      var splits2 = str.substring(8,)
      var str3 = splits1+5000+"-"+splits2
      
      this.http.get<menuitem>(str3+"/details/"+this.id).subscribe(data => {
        this.itemDetails = data
      }) 
  
  } );
  }

}
