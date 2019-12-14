
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { PriceComponent } from './price/price.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule }   from '@angular/common/http';
import { BooksService } from './bookslist/books.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/users.service';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Главная' }
    },
    {
    path: 'bookslist',
    component: BookslistComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Книги' }
    },
    {
    path: 'comments',
    component: CommentsComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Отзывы' }
    },
    {
    path: 'contacts',
    component: ContactsComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Контакты' }
    },
    {
    path: 'price',
    component: PriceComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Цены' }
    },
    
    {
      path: 'signup', 
      component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
    },
    {
      path: 'login', 
      component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
    }    
  ];
@NgModule({
  declarations: [
    AppComponent,
    BookslistComponent,
    PriceComponent,
    CommentsComponent,
    ContactsComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot( appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
    providers: [BooksService, UserService, AuthGuard],
    bootstrap: [AppComponent]
    })
    export class AppModule { }