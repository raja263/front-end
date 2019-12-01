import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {StudentAssignmentHomeComponent} from '../student/student-assignment-home/student-assignment-home.component';
import {AuthGuard} from '../../guards/auth.guard';
import {Role} from '../../models/role';
import {InstructorCourseHomeComponent} from '../instructor/instructor-course-home/instructor-course-home.component';
import {InstructorCourseDetailsComponent} from '../instructor/instructor-course-details/instructor-course-details.component';
import {MessagesHomeComponent} from '../../messages-home/messages-home.component';
import {MessagesNewComponent} from '../../messages-new/messages-new.component';
import {MessagesConvoComponent} from '../../messages-convo/messages-convo.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    currentUser: User;

    constructor(location: Location,  private element: ElementRef, private router: Router, private userService: UserService) {
        this.currentUser = this.userService.currentUserValue;
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         var $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        try {
            this.toggleButton.classList.remove('toggled');
        } catch (e) {
            const navbar: HTMLElement = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        }
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { //asign a function
              body.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.includes('#/home/')){
          titlee = titlee.slice(7);
      }
      const index = titlee.indexOf("/");
      if (index > 0) {
          titlee = titlee.substring(0, index);
      }
      let titles = this.listTitles;
      titles.push({path: 'student-course-home/:courseId', title: 'My modules',  icon: 'dashboard', class: '' });
      titles.push({path: 'student-module-details/:moduleId', title: 'Module',  icon: 'dashboard', class: '' });
      titles.push({path: 'student-assignment-home/:assignmentId', title: 'Assignment',  icon: 'dashboard', class: '' });
      titles.push({path: 'instructor-course-home/:courseId', title: 'My module',  icon: 'dashboard', class: '' });
      titles.push({path: 'instructor-course-details/:moduleId', title: 'Module',  icon: 'dashboard', class: '' });
      titles.push({path: 'instructor-assignment-home/:assignmentId', title: 'Assignment',  icon: 'dashboard', class: '' });
      titles.push({path: 'messages-home', title: 'Messages',  icon: 'dashboard', class: '' });
      titles.push({path: 'messages-new', title: 'New message',  icon: 'dashboard', class: '' });
      titles.push({path: 'messages-convo/:id', title: 'Conversation',  icon: 'dashboard', class: '' });

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          } else if (this.listTitles[item].path.startsWith(titlee)) {
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }

    logOut(){
        this.userService.logOut().subscribe(data => {
            this.router.navigate(['/homepage']);
        });
    }
}
