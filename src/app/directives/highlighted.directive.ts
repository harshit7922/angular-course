import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() {
    console.log('Highlighted directive initialized');
  }

  @HostBinding('style.border') // Correctly bind to the 'class.highlighted' property
  get cssClass() {
    console.log('cssClass getter called');
  
    return "2px solid red"; // Return true to apply the class
  }
}