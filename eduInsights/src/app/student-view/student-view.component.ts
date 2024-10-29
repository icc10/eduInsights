import { Component } from '@angular/core';
import { NgIf} from '@angular/common';
import { Class } from '../entities/class';
//import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css'
})
export class StudentViewComponent {
  submitted : boolean = false;
  gotClass: boolean = false;

  class: Class = {
      code: 0,
      responses: [],
      suggestions: '',
    };



  //constructor(private classService: ClassService){}

  //   getClass(id: string): void {
  //     this.classService.get(id)
  //       .subscribe({
  //         next: (data) => {
  //          this.class = data[0];
  //          this.gotOpening = true;
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   }

  //   saveClass(): void {
  //     const data = {
  //       code: this.class.code,
  //       responses: this.class.responses,
  //     };
  //
  //     this.classService.create(data).
  //       subscribe({
  //         next: (res) => {
  //           console.log('success', res);
  //         },
  //         error: (e) => console.error('fail', e)
  //       });
  //   }

}
