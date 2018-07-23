import { GetBookDetailResolver } from './../book-detail/resolvers/get-book-detail.resolver';
import { BookDetailComponent } from './../book-detail/book-detail.component';

export const BooksRoute = {
  path: ':id',
  component: BookDetailComponent,
  resolve: {
    detail: GetBookDetailResolver
  }
};
