import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseViewComponent} from './choose-view/choose-view.component';
import { InstructorViewComponent} from './instructor-view/instructor-view.component';
import { StudentViewComponent} from './student-view/student-view.component';
import { AboutComponent} from './about/about.component';
import { HowToUseComponent} from './how-to-use/how-to-use.component';

const routes: Routes = [
  { path: 'chooseView', component: ChooseViewComponent },
  { path: '', redirectTo: 'chooseView', pathMatch: 'full' },
  { path: 'instructorView', component: InstructorViewComponent },
  { path: 'studentView', component: StudentViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'howToUse', component: HowToUseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
