import { Component } from '@angular/core';
import { NgIf} from '@angular/common';
import { Class } from '../entities/class';
//import { SuggestionsService } from '../services/suggestions.service';

@Component({
  selector: 'app-instructor-view',
  templateUrl: './instructor-view.component.html',
  styleUrl: './instructor-view.component.css'
})
export class InstructorViewComponent {
  submitted : boolean = false;
  str : string = "hi";


  class: Class = {
    code: 0,
    responses: [],
    suggestions: '',
  };

  //constructor(private suggestionsService: SuggestionsService){}





  generateCode(): void {
      this.class.code = Math.floor(10000000 + Math.random() * 90000000);
      //this.saveClass();
  }

//   saveClass(): void {
//     const data = {
//       code: this.class.code,
//       responses: this.class.responses,
//       suggestions: this.class.suggestions,
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

    generateSuggestions(): void {
//       this.suggestionsServices.get(this.class.responses)
//         .subscribe({
//           next: (data) => {
//            this.class.suggestions = data[0];
//           },
//           error: (e) => console.error(e)
//         });
    }

}
