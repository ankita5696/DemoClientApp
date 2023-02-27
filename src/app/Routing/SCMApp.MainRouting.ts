import { HomeComponent } from "../Home/SCMApp.HomeComponent";

export const MainRoutes = 
[
    {path: 'Home', component:HomeComponent},  
    {path: 'HealthIssue',         
    loadChildren:() =>import('../HealthIssue/SCMApp.HealthissueListModule').then(x=>x.HealthIssueListModule)},
    {path: '', component:HomeComponent}
]