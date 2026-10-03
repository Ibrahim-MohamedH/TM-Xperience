import { Component, inject } from '@angular/core';
import { TFInput } from './shared/components/tf-input/tf-input';
import { AppService } from './core/services/appService';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [TFInput, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected appService = inject(AppService)
private readonly fb = inject(NonNullableFormBuilder);

readonly form = this.fb.group(
  {
    email: ['', Validators.required],
    password: ['', Validators.required],
  }
)
onSubmit(){
  console.log(this.form.value)
}
}
