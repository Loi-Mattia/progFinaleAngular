import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto-finale pippo';

  constructor(private router: Router){
    console.log(process.env.NG_APP_URL)
  }
 

}
