import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: 'echarts'
})
export class EchartsDirective implements OnInit {

  @Input('chartType') chartType: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    echarts.init(this.el.nativeElement).setOption(this.chartType);
  }
}
