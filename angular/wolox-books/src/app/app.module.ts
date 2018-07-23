import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { AuthComponent } from './screens/auth/auth.component';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { BooksComponent } from './screens/auth/screens/books/books.component';
import { HeaderComponent } from './screens/auth/components/header/header.component';
import { BookDetailComponent } from './screens/auth/screens/book-detail/book-detail.component';

import { AuthService } from './services/auth/auth.service';
import { BookService } from './services/book/book.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { UserService } from './services/user/user.service';
import { InterceptorService } from './interceptors/app.interceptor';

import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

import { GetBookListResolver } from './screens/auth/screens/books/resolvers/get-book-list.resolver';
import { GetBookDetailResolver } from './screens/auth/screens/book-detail/resolvers/get-book-detail.resolver';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BooksComponent,
    UnauthComponent,
    AuthComponent,
    HeaderComponent,
    BookDetailComponent
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
    GetBookDetailResolver,
    GetBookListResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
