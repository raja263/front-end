import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {Module} from '../../../models/modules';
import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../services/course.service';
import {ModuleContent} from '../../../models/modulecontent';
import {PlayVideoComponent} from '../play-video/play-video.component';
import {MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-student-module-details',
  templateUrl: './student-module-details.component.html',
  styleUrls: ['./student-module-details.component.scss']
})
export class StudentModuleDetailsComponent implements OnInit {
  currentStudent: User;
  currentModule: Module;
  moduleContents: Array<ModuleContent>;
  moduleId: string;
  safeUrl: any;
  videoDialog : MatDialogRef<PlayVideoComponent>;
  innerWidth: number;
  constructor(private route: ActivatedRoute, private courseService: CourseService, private dialog: MatDialog) {
    this.currentStudent = JSON.parse(localStorage.getItem("currentUser"));
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.route.paramMap.subscribe(params => {
      if(params.has('moduleId')){
        this.moduleId = params.get('moduleId');
      }
      if(this.moduleId || this.currentStudent) {
        this.getModule();
        this.findModuleContent();
      }
    });
  }

  findModuleContent(){
    this.courseService.findModuleContent(this.moduleId).subscribe(data => {
      this.moduleContents = data;
    });
  }

  getModule() {
    this.courseService.getModuleById(this.moduleId).subscribe(module => {
      this.currentModule = module;
    });
  }

  open(videoLink) {
    //this.videoDialog = this.dialog.open(PlayVideoComponent);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    let relativeWidth = (this.innerWidth * 80) / 100; // take up to 80% of the screen size
    if (this.innerWidth > 1500) {
      relativeWidth = (1500 * 80 ) / 100;
    } else {
      relativeWidth = (this.innerWidth * 80 ) / 100;
    }

    const relativeHeight = (relativeWidth * 9) / 16 + 120; // 16:9 to which we add 120 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';
    dialogConfig.height = relativeHeight + 'px';

    dialogConfig.data = {
      url: videoLink
    }

    const dialogRef = this.dialog.open(PlayVideoComponent, dialogConfig);
  }
}