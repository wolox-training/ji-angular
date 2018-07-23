import { AuthComponent } from './auth.component';
import { AuthGuard } from './../../guards/auth.guard';

import { BooksRoute } from './screens/books/books.route';
import { BookDetailRoute } from './screens/book-detail/book-detail.route';

export const AuthRoute = {
  path: 'book-list',
  canActivate: [AuthGuard],
  component: AuthComponent,
  children: [
    BooksRoute,
    BookDetailRoute
  ]
};
