export interface IExpense {
    Id: number;
    ReceiptNumber: string;
    ReceiptDate: string;
    Description: string;
    Amount: number;
    ReimbursementAmount: number;
    status: string;
    employee: string;
}