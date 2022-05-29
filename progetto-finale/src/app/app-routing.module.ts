import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

}

