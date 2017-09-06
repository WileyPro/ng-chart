import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EchartsDirective } from './directives/echarts.directive';
import { CalculationService } from './services/calculation.service';

@NgModule({
  declarations: [
    AppComponent,
    EchartsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
