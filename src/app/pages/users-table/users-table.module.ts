import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersTableRoutingModule} from './users-table-routing.module';
import {UsersTableComponent} from './users-table.component';
import { MatTableModule } from '@angular/material/table';
import { PostsComponent } from './posts/posts.component' 

@NgModule({
    declarations: [UsersTableComponent, PostsComponent],
    imports: [CommonModule, UsersTableRoutingModule, MatTableModule]
})
export class UsersTableModule {}
