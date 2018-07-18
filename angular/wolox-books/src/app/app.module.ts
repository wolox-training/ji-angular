import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { RegisterComponent } from './screens/unauth/register/register.component';
import { LoginComponent } from './screens/unauth/login/login.component';
import { BooksComponent } from './screens/book-list/books/books.component';

import { AuthService } from './components/services/auth/auth.service';
import { BookService } from './components/services/book/book.service';
import { LocalStorageService } from './components/services/local-storage/local-storage.service';
import { UserService } from './components/services/user/user.service';

import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { InterceptorService } from './app.interceptor';
import { HeaderComponent } from './components/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BooksComponent,
    UnauthComponent,
    BookListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    LocalStorageService,
    AuthService,
    BookService,
    AuthGuard,
    UnauthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
