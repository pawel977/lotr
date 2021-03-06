import { Routes } from '@angular/router';
import * as cmp from '../components';

export const routes: Routes = [
    {
            path: '',
            component: cmp.HomeComponent
    },
    {
    path: 'books',
    loadChildren: () => import('../../books/books.module').then(m => m.BooksModule)
    },
    {
        path: 'movies',
        loadChildren: () => import('../../movies/movies.module').then(m => m.MoviesModule)
    }
]