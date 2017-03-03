import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InterestService {

    private data: any;
    private responseData: any;
    private id:any;
    private interestValue: any;
    private url: string = "http://127.0.0.1:8080/interestCalculator";

    constructor(private http: Http) {}

    postAccount(balance: number, accountType: string, interestRate:number, overDraftPenalty:number,
    requiredMinimumBalance:number, isMinimumBalanceRequired:boolean, recurringTransactions:[any], accountHistory:[any]){
        this.data = {
            "balance": balance,
            "accountType": accountType,
            "interestRate": interestRate,
            "overDraftPenalty": overDraftPenalty,
            "requiredMinimumBalance": requiredMinimumBalance,
            "isMinimumBalanceRequired": isMinimumBalanceRequired,
            "recurringTransactions": null,
            "accountHistory": null
        };

        this.http.post(this.url, this.data).subscribe(response => {
            this.responseData = response.json();
            console.log(this.responseData);
            this.id = this.responseData.id;
        });
    }

    getInterestValue(id:any, interval:number, frequency:number,interestType:number, calculationRule:number, numDaysForRule:number) {
        this.data = {
            "id": id,
            "interval": interval,
            "frequency": frequency,
            "interestType": interestType,
            "calculationRule": calculationRule,
            "numDaysForRule": numDaysForRule
        };
        
        this.http.post(this.url, this.data).subscribe(response => {
            this.responseData = response.json();
            console.log(this.responseData);
            this.interestValue = this.responseData.interestValue;
        });
    }
}