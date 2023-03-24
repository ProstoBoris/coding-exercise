import { Component } from '@angular/core';

import { CardOption, PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
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
