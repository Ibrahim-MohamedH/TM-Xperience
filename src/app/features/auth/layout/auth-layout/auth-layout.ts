import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Language } from '../../../../core/services/language';
import { Theme } from '../../../../core/services/theme';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout implements OnInit {
  protected language = inject(Language)
  protected theme = inject(Theme)

  ngOnInit(): void {
    this.language.detectLanguage()
    this.theme.detectTheme()
  }
}
