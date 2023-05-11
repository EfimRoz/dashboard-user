import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PostsComponent } from './pages/users-table/posts/posts.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'users-table',
        pathMatch: 'full'
    },
    {
        path: 'users-table',
        loadChildren: () => import('./pages/users-table/users-table.module').then(m => m.UsersTableModule)
    },
    {
        path: 'posts',
        component: PostsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
