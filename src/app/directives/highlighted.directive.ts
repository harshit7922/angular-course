import { Directive, Input, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  @Input('highlighted') 
  highlighted: boolean = false; // Use the correct property name
  constructor() {
    console.log('Highlighted directive initialized');
  }

  @HostBinding('class.highlighted') // Correctly bind to the 'class.highlighted' property
  get cssClass() {
    console.log('cssClass getter called');
  
    return this.highlighted; // Return true to apply the class
  }
}