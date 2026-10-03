import { inputType, StrengthKey } from './../../models/input.model';
import { Component, computed, forwardRef, Input, input, signal} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tf-input',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './tf-input.html',
  styleUrl: './tf-input.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TFInput),
      multi: true
    }
  ]
})
export class TFInput {
  type = input<inputType>('text')
  label = input.required<string>()
  labelPosition = input<'start' | 'end'>('start')

  labelClass = input<string>();
  errorMEssageClass = input<string>()
  inputClass = input<string>()

  placeholder = input<string | null>(null);
  errorMessage = input<string | string[] | null>(null)

  showLable = input<boolean>(true)
  required = input<boolean>(false)
  isValid = input<boolean>(false)
  readonly = input<boolean>(false)
  @Input() disabled: boolean = false

  value = signal<any>(null)

  icon = input<SafeHtml | null>(null)

  generateId(text: string){
    return text.replace(/\s+/g, '_').toLowerCase();
  }
  // Function For Control Value Accessor
  onChange: (_: any) => void = () => {}
  onTouched: () => void = () => {}

  writeValue(value: any): void{
    this.value.set(value);
  }

  registerOnChange(fn: any) :void{
    this.onChange = fn
  }

  registerOnTouched(fn: any) :void{
    this.onTouched = fn
  }

  onInputChange(event:Event){
    this.value.set(event)
    if(this.type() == 'password' && this.showPassword()){
      this.password.set(event)
    }
    this.onChange(this.value())
    this.onTouched();
  }
  onCheckboxChange(event: Event){
    const checked = (event.target as HTMLInputElement).checked
    this.onChange(checked)
  }
  showPassword = signal<boolean>(false);
  inputType = computed(()=> (this.showPassword() ? 'text' : 'password'))

  toggleIcon = computed(() =>
    this.showPassword() ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye',
  );

  togglePassword(input: any) {
    this.showPassword.update((v) => !v);
    input.type = this.inputType();
  }

  showMeter = signal<boolean>(false);
   password = signal<any>('');

  score = computed(() => {
    const val = this.password();
    let s = 0;
    if (!val) return 0;
    if (val.length >= 8) s++;
    if (/[A-Za-z]/.test(val)) s++;
    if (/[0-9]/.test(val)) s++;
    if (/[^A-Za-z0-9]/.test(val)) s++;

    return s;
  });

  strengthKey = computed<StrengthKey>(() => {
    const s = this.score();
    if (!this.password()) return 'empty';
    if (s <= 1) return 'weak';
    if (s === 2) return 'fair';
    if (s === 3) return 'good';
    return 'strong';
  });

  strengthLabel = computed(() => {
    switch (this.strengthKey()) {
      case 'weak':
        return 'Weak';
      case 'fair':
        return 'Fair';
      case 'good':
        return 'Good';
      case 'strong':
        return 'Strong';
      default:
        return 'Too short';
    }
  });

  displayMeter = computed(() => !!this.password());
}
