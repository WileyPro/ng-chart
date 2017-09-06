import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {

  constructor() { }

  getLineData() {
    let a: number = 2000;
  }

  //
  getProfitOnDay() {

  }

  getProfitOnMonth(cardinalMoney: number, monthes: number, income: number, expenses: number) {

    let totalIncome = 0;

    for (var i = 0; i < monthes; i++) {
      totalIncome += income;

    }





  }

  getProfitOnYeay() {

  }


  generatingFormat() {

  }

}
