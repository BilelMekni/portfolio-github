import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HommeComponent } from './components/homme/homme.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const routes: Routes = [
  //localhost 4200:// Home
  {path:"", component:HommeComponent},
   //localhost 4200:// Contact
   {path:"contact", component:ContactComponent},
   //localhost 4200:// Contact Table
   {path:"contactTable" , component:ContactTableComponent},
   //localhost 4200:// Portfolio
   {path:"portfolio" , component:PortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
