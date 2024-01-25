import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PerformanceplusComponent } from './performanceplus/performanceplus.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProgramsComponent } from './programs/programs.component';
import { EmployeePayComponent } from './performanceplus/employee-pay/employee-pay.component';
import { EmployeesComponent } from './performanceplus/employees/employees.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PerformanceplusComponent, HeaderComponent, NavigationBarComponent, ProgramsComponent, EmployeePayComponent, EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project-demo';
}
