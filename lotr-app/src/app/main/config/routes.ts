import { Routes } from '@angular/router';
import * as cmp from '../components';

export const routes: Routes = [
    {
        path: '',
        component: cmp.MainContentComponent,
        children: [{
            path: '',
            component: cmp.HomeComponent
        }]
    }
]