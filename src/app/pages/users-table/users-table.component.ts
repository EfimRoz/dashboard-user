import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/user.model';
import {UsersService} from 'src/app/services/users.service';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss']
})


export class UsersTableComponent implements OnInit {
    constructor(private usersService: UsersService) {}
    displayedColumns: string[] = 
        ['name', 'username', 'email', 'phone', 'address', 'company', 'website', 'albumsNumber'];
    dataSource: User[] = [];
    ngOnInit(): void {
        this.fillUsers();
    }

    fillUsers(): void {
        this.usersService.getUsers().subscribe(
            users => {
                this.dataSource = users;
            }
        )
    }
}
