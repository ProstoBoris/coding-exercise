import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CardOption } from '../purchase.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() option?: CardOption;
  @Output() select: EventEmitter<void> = new EventEmitter();

  selectOption() {
    this.select.emit();
  }
}
