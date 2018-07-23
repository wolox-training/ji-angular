import { GetBookListResolver } from './../books/resolvers/get-book-list.resolver';
import { BooksComponent } from './../books/books.component';

export const BookDetailRoute = {
  path: '',
  component: BooksComponent,
  resolve: {
    books: GetBookListResolver
  }
};
