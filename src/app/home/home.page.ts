import { Component, ViewChild } from '@angular/core';
import {NgxPrinterService} from 'ngx-printer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private printerService: NgxPrinterService) {}

  printWindow(){
    this.printerService.printCurrentWindow();
  }
  printById(){
    this.printerService.printDiv('container');
  }
  printPic(){
    this.printerService.printImg('../../assets/shapes.svg')
  }

  // printHTMLElement(){
  //   this.printerService.printHTMLElement(<b>Test</b>);
  // }
}
