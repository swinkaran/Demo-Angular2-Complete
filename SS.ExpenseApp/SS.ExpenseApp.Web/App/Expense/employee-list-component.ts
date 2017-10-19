 import { Component, OnInit } from '@angular/core';
//import { IProduct } from './product';
//import { ProductService } from './product.service';

@Component({
    selector: 'list-expenses',
    templateUrl: 'App/Expense/employee-list-component.html'
    //styleUrls: []
    //templateUrl: 'product-list.component.html',
    //styleUrls: ['product-list.component.css']
})

export class ExpenseListComponent {
    pageTitle: string = 'Expenses listing'
}
