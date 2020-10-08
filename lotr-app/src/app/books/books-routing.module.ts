import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as routes from './config/routes';

@NgModule({
    imports: [RouterModule.forChild(routes.routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule {}