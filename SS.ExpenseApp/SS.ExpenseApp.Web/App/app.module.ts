import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './App.component';
import { ExpenseListComponent } from './Expense/employee-list-component';
//import { EmployeeListComponent } from './employee/employee-list.component'
//import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
//import { StarComponent } from './shared/star.component';

@NgModule({
    imports: [BrowserModule,
        //HttpClientModule,
        FormsModule],

    declarations: [AppComponent, ExpenseListComponent
    ],

    providers: [],

    bootstrap: [AppComponent]
})

export class AppModule { }