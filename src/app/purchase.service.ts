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
      color: '#979797',
      selected: false
    },
    {
      index: 1,
      name: 'regular',
      description: 'Regular features for your business to grow.',
      price: 25,
      color: '#3B86FF',
      selected: false
    },
    {
      index: 2,
      name: 'professional',
      description: 'Professional features for your business to grow.',
      price: 75,
      color: '#8B68EE',
      selected: false
    },
    {
      index: 3,
      name: 'ultimate',
      description: 'The ultimate set of features for your business to grow.',
      price: 115,
      color: '#EE3541',
      selected: false
    }
  ];

  getOptions() {
    return this.options;
  }

  // select or unselect (toggle) an option
  // if one option is selected,
  // all other options are set as unselected
  setSelectedOption(index: number) {
    this.options.forEach((option, i) => {
      if (i === index) option.selected = !option.selected;
      else { option.selected = false }
    });
  }

  // get the index of selected option
  getSelectedOption() {
    return this.options.find(option => option.selected)?.index;
  }
}

export interface CardOption {
  index: number;
  name: string;
  description: string;
  price: number;
  color: string;
  selected: boolean;
}
