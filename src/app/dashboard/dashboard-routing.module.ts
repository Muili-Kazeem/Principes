import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { QuickaccessComponent } from './pages/quickaccess/quickaccess.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'customer',
        pathMatch: "full"
      },
      {
        path: 'customer',
        component: CustomersComponent
      },
      {
        path: 'teams',
        component: TeamsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'quick',
        component: QuickaccessComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
