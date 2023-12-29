import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  {path:"dash", component:DashboardComponent},
  {path:"", component:LoginComponent},
  {path:"header", component:HeaderComponent},
  {path:"book", component:BookListComponent},
  {path:"view",component:ViewBookComponent},
  {path:"error",component:ErrorPageComponent}, 
  {path:"contact",component:ContactComponent},
  {path:"reviews",component:ReviewsComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
