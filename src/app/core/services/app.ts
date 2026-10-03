import { inject, Injectable } from '@angular/core';
import { icons } from '../icons/icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // --------------------------------------------
  // Get Icons
  // --------------------------------------------
  private readonly sanitiser = inject(DomSanitizer)

  getIcon(name: keyof typeof icons, style?: string): SafeHtml{
    let iconHtml = icons[name]

    if(style){
      iconHtml = String(iconHtml).replace('<i', `<i style="${style}"`)
    }

    return this.sanitiser.bypassSecurityTrustHtml(iconHtml)
  }
}



// XSS ( Cross-site scripting)
