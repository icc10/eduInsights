import { Component } from '@angular/core';
import { NgIf} from '@angular/common';
import { Class } from '../entities/class';
//import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-instructor-view',
  templateUrl: './instructor-view.component.html',
  styleUrl: './instructor-view.component.css'
})
export class InstructorViewComponent {
  submitted : boolean = false;


  class: Class = {
    code: 0,
    responses: [],
  };

  //constructor(private classService: ClassService){}





  generateCode(): void {
      this.class.code = Math.floor(10000000 + Math.random() * 90000000);
      //this.saveClass();
  }

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

  displayResponses(id: number): void {
    this.submitted = true;
    //this.getOpening();
  }

//   getOpening(id: string): void {
//     this.classService.get(id)
//       .subscribe({
//         next: (data) => {
//          this.class = data[0];
//         },
//         error: (e) => console.error(e)
//       });
//   }
}
