import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeptComponent } from './dept/dept.component';
import { DocComponent } from './doc/doc.component';
import { EmpComponent } from './emp/emp.component';
import { NoteComponent } from './note/note.component';
import { OrgChartComponent } from './org-chart/org-chart.component';

const routes: Routes = [
  { path: 'dept', component: DeptComponent },
  { path: 'doc', component: DocComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'note', component: NoteComponent },
  { path: 'org-chart', component: OrgChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
