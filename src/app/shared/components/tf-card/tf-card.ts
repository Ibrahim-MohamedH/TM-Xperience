import { Component, computed, contentChild, input } from '@angular/core';
import { Cardheader } from '../../directives/cardheader';
import { Cardfooter } from '../../directives/cardfooter';

@Component({
  selector: 'tf-card',
  imports: [],
  templateUrl: './tf-card.html',
  styleUrl: './tf-card.css',
})
export class TFCard {
  header = contentChild(Cardheader);
  footer = contentChild(Cardfooter);

  hasHeader = computed(() => Boolean(this.header()))
  hasFooter = computed(() => Boolean(this.footer()))

  bodyClass = input<string>('')
  headerClass = input<string>('')
  footerClass = input<string>('')
}


