import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,AfterViewInit  } from '@angular/core';
import { menuitem } from '../menuitem.model';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,AfterViewInit  {
  
  private map: any | undefined
  private lat: any
  private long: any
  private id: string = "";

  stars(i: number) {
    return new Array(i);
  }

  public itemDetails: menuitem = undefined!;

  private initMap(): void {

    

    const icon = new L.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });

    this.map = L.map('map', {
      center: [ this.lat, this.long ],
      zoom: 6
    });

    L.marker([this.lat , this.long], { icon }).addTo(this.map);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  

  constructor(private route: ActivatedRoute,private http: HttpClient){

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
        var cords = data.coords.split(",")
        this.lat = cords[0]
        this.long = cords[1]
      }) 
  
  } );
  }
  ngAfterViewInit(): void {
    this.initMap();
   }
}
