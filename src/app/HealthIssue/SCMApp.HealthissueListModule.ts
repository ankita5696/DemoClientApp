import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HealthIssueListComponent } from './SCMApp.HealthIssueListComponent';
import { HealthIssueListRoutes } from '../Routing/SCMApp.HealthIssueListRouting';

@NgModule({
  declarations: [   
    HealthIssueListComponent   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HealthIssueListRoutes)
  ],
  providers: [],
  bootstrap: [HealthIssueListComponent]
})
export class HealthIssueListModule { }
