import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members', component: MemberListComponent, canActivate: [authGuard]},
            {path: 'members/:id', component: MemberDetailComponent},
            {path: 'lists', component: ListOfUsersComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },
    {path: '**', component: HomepageComponent, pathMatch: 'full'},
];
