import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { RegisterComponent } from './screens/unauth/register/register.component';
import { LoginComponent } from './screens/unauth/login/login.component';
import { BooksComponent } from './screens/book-list/books/books.component';

import { UserService } from './components/services/user/user.service';
import { LocalStorageService } from './components/services/local-storage/local-storage.service';
import { AuthService } from './components/services/auth/auth.service';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BooksComponent,
    UnauthComponent,
    BookListComponent
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
    AuthGuard,
    UnauthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
