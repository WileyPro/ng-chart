import { Component, OnInit } from '@angular/core';

import { CalculationService } from './services/calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private calculatservice: CalculationService) {

  }

  ngOnInit() {
    this.compute();

    this.calculatservice.getLineData();
  }








  private lineChartData = {
    title: {
      text: '趋势图',
      subtext: 'test',
      x: "center"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 元'
      }
    },
    series: [
      {
        name: '总额',
        type: 'line',
        data: []
      }
    ]
  }

  private lineChart: object = this.lineChartData;

  private capital = 100000;
  private days = 40;
  private per = 0.1;

  private lixi = [];

  compute() {
    let ret = this.capital;
    let i = 0;
    while (i < this.days) {
      ret += ret * this.per;
      i++;
      this.lixi.push(ret.toFixed(2));

    };
    console.log(this.lixi);
    this.lineChartData.series = [
      {
        name: '总额',
        type: 'line',
        data: this.lixi
      }
    ]
  }

}
