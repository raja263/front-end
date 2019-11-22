import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { StudentCourseHomeComponent } from '../../components/student/student-course-home/student-course-home.component';
import { StudentModuleDetailsComponent } from '../../components/student/student-module-details/student-module-details.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {AuthGuard} from '../../guards/auth.guard';
import {Role} from '../../models/role';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'student-course-home/:courseId',      component: StudentCourseHomeComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'student-module-details/:moduleId',      component: StudentModuleDetailsComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'user-profile',   component: UserProfileComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'table-list',     component: TableListComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'typography',     component: TypographyComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'icons',          component: IconsComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'maps',           component: MapsComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'notifications',  component: NotificationsComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
    { path: 'upgrade',        component: UpgradeComponent , canActivate: [AuthGuard], data: {roles: [Role.STUDENT]}},
];
