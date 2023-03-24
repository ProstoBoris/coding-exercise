import { Component, OnInit } from '@angular/core';

import { CardOption, PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  options: CardOption[] = [];
  selectedOption = this.getSelectedOption();

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.options = this.purchaseService.getOptions();
  }

  selectOption(index: number) {
    this.purchaseService.setSelectedOption(index);
    this.selectedOption = this.getSelectedOption();
  }

  getSelectedOption() {
    return this.purchaseService.getSelectedOption();
  }
}
