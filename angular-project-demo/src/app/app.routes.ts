import { Routes } from '@angular/router';
import { RouterModule, } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './performanceplus/employees/employees.component';
import { EmployeePayComponent } from './performanceplus/employee-pay/employee-pay.component';
import { CostComponent } from './cost/cost.component';
import { ProgramsComponent } from './programs/programs.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'cost', component: CostComponent },
];
