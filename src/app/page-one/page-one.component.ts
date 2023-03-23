import { Component, OnInit } from '@angular/core';

import { CardOption, PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  options: CardOption[] = [];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.options = this.purchaseService.getOptions();
  }

  selectOption(index: number) {
    console.log('SELECTED', index)
    this.purchaseService.setSelectedOption(index);
  }

  getSelectedOption() {
    return this.purchaseService.getSelectedOption();
  }
}
