import { Directive, Input, HostBinding,HostListener } from '@angular/core';

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

  @HostBinding('attr.disabled')
  get disbled() {
    console.log('disabled getter called');
    return this.highlighted ? null : true; // Return null to remove the attribute when highlighted is true
  }

  @HostListener('mouseover')
  mouseOver() {
    console.log('Mouse over event triggered');
    this.highlighted = true; // Set highlighted to true on mouseover
  }

  @HostListener('mouseleave')
  mouseLeave() {
    console.log('Mouse leave event triggered');
    this.highlighted = false; // Set highlighted to false on mouseleave
  }
}