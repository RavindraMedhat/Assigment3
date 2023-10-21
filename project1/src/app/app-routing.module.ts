import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C0Component } from './c0/c0.component';
import { C1Component } from './c1/c1.component';


const routes: Routes = [
  {path:"Component1",component:C1Component},
  {path:"Component0",component:C0Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
