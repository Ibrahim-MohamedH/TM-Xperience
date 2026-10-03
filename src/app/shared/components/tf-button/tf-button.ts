import { AppService } from './../../../core/services/app';
import { Component, inject, input } from '@angular/core';
import { buttonVariants } from '../../models/button.model';
import { SafeHtml } from '@angular/platform-browser';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tf-button',
  imports: [TranslatePipe],
  templateUrl: './tf-button.html',
  styleUrl: './tf-button.css',
})
export class TFButton {
  protected appService = inject(AppService)

  type = input.required<'button' | 'submit' | 'reset'>()
  label = input.required<string>()
  iconPosition = input<'start' | 'end'>('start')
  iconStyle = input<string>('')
  iconClass = input<string>('')
  buttonClass = input<string>('')
  labelClass = input<string>('')
  loadingText = input<string>('')

  variant = input<buttonVariants>('primary')
  icon = input<any>('')

  disabled = input<boolean>(false);
  loading = input<boolean>(false);

  computedClasses():string {
    const base: string[] = []
    if(this.disabled()){
      base.push('opacity-50', 'cursor-not-allowed!')
    }

    switch (this.variant()){
      case 'primary':
        base.push('bg-brand', 'text-white');
        break;
      case 'secondary':
        base.push('bg-[#F1F1F4]', 'text-[#4B5675]');
        break;
      case 'blue':
        base.push('bg-[#1B84FF]', 'text-white');
        break;
      case 'outline':
        base.push('bg-white', 'text-[#2F3A4A]', 'border-2', 'border-brand');
        break;
      case 'black':
        base.push('bg-black', 'text-white');
        break;
      case 'white':
        base.push('bg-white', 'text-black');
        break;
    }

    base.push(this.buttonClass())
    return base.join(' ')
  }
}
