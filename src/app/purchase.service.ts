import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor() { }

  private options: CardOption[] = [
    {
      index: 0,
      name: 'starter',
      description: 'Starter features for your business to grow.',
      price: 1,
      selected: false
    },
    {
      index: 1,
      name: 'regular',
      description: 'Regular features for your business to grow.',
      price: 25,
      selected: false
    },
    {
      index: 2,
      name: 'professional',
      description: 'Professional features for your business to grow.',
      price: 75,
      selected: false
    },
    {
      index: 3,
      name: 'ultimate',
      description: 'The ultimate set of features for your business to grow.',
      price: 115,
      selected: false
    }
  ];

  getOptions() {
    return this.options;
  }

  setSelectedOption(index: number) {
    this.options.forEach((option, i) => {
      option.selected = i === index;
    });
  }

  getSelectedOption() {
    return this.options.find(option => option.selected);
  }
}

export interface CardOption {
  index: number;
  name: string;
  description: string;
  price: number;
  selected: boolean;
}
