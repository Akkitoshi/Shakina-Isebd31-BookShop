import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { PriceComponent } from './price/price.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    data: { title: 'Главная' }
    },
    {
    path: 'bookslist',
    component: BookslistComponent,
    data: { title: 'Книги' }
    },
    {
    path: 'comments',
    component: CommentsComponent,
    data: { title: 'Отзывы' }
    },
    {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Контакты' }
    },
    {
    path: 'price',
    component: PriceComponent,
    data: { title: 'Цены' }
    },
    
    //{ path: '**', component: PageNotFoundComponent }
    ];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BookslistComponent,
    PriceComponent,
    CommentsComponent,
    ContactsComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <— debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }