import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() {
    console.log('Highlighted directive initialized');
  }

  @HostBinding('className') // Correctly bind to the 'class.highlighted' property
  get cssClass() {
    console.log('cssClass getter called');
  
    return "highlighted"; // Return true to apply the class
  }
}