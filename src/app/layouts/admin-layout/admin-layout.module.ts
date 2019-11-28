import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
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
import {PlayVideoComponent} from '../../components/student/play-video/play-video.component';
import {ViewStudentComponent} from '../../components/instructor/view-student/view-student.component';
import {StudentAssignmentHomeComponent} from '../../components/student/student-assignment-home/student-assignment-home.component';
import {ViewCourseDialogComponent} from '../../components/student/view-course-dialog/view-course-dialog.component';

import {InstructorCourseDetailsComponent} from '../../components/instructor/instructor-course-details/instructor-course-details.component';
import { InstructorCourseHomeComponent } from '../../components/instructor/instructor-course-home/instructor-course-home.component';
import { InstructorAssignmentHomeComponent } from '../../components/instructor/instructor-assignment-home/instructor-assignment-home.component';
import { AssignGradeComponent } from '../../components/instructor/assign-grade/assign-grade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import {DiscussionHomeComponent} from '../../discussion-home/discussion-home.component';
import {DiscussionComponent} from '../../discussion/discussion.component';
import {DiscussionPostComponent} from '../../discussion-post/discussion-post.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    DashboardComponent,
    StudentCourseHomeComponent,
    StudentModuleDetailsComponent,
    StudentAssignmentHomeComponent,
    PlayVideoComponent,
    InstructorCourseHomeComponent,
    InstructorCourseDetailsComponent,
    InstructorAssignmentHomeComponent,
    ViewStudentComponent,
    AssignGradeComponent,
    ViewCourseDialogComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    DiscussionHomeComponent,
    DiscussionPostComponent,
    DiscussionComponent
  ],
  entryComponents: [
    PlayVideoComponent,
    ViewStudentComponent,
    ViewCourseDialogComponent,
    AssignGradeComponent
  ]
})

export class AdminLayoutModule {}
