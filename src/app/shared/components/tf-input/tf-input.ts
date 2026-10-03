import { Component, forwardRef, Input, input, signal} from '@angular/core';
import { inputType } from '../../models/input.model';
import { SafeHtml } from '@angular/platform-browser';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tf-input',
  imports: [FormsModule],
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
    this.onChange(this.value())
    this.onTouched();
  }
  onCheckboxChange(event: Event){
    const checked = (event.target as HTMLInputElement).checked
    this.onChange(checked)
  }
}
