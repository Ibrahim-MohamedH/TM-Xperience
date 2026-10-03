import { Component, inject } from '@angular/core';
import { TFInput } from './shared/components/tf-input/tf-input';
import { AppService } from './core/services/app';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { TFCard } from './shared/components/tf-card/tf-card';
import { Cardheader } from './shared/directives/cardheader';
import { Cardfooter } from './shared/directives/cardfooter';
import { TFButton } from './shared/components/tf-button/tf-button';

@Component({
  selector: 'app-root',
  imports: [TFCard, Cardheader, Cardfooter, TFButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected appService = inject(AppService)
}
