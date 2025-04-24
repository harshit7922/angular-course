import { Directive, Input, HostBinding,HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  @Input('highlighted') 
  highlighted: boolean = false; // Use the correct property name

  @Output()
  toggleHighlighted = new EventEmitter(); // Emit the toggle event  


  constructor() {
    console.log('Highlighted directive initialized');
  }

  @HostBinding('class.highlighted') // Correctly bind to the 'class.highlighted' property
  get cssClass() { 
    return this.highlighted; // Return true to apply the class
  }

  @HostBinding('attr.disabled')
  get disbled() {
    return this.highlighted ? null : true; // Return null to remove the attribute when highlighted is true
  }

  @HostListener('mouseover')
  mouseOver() {
    this.highlighted = true; // Set highlighted to true on mouseover
    this.toggleHighlighted.emit(this.highlighted); // Emit the toggle event
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.highlighted = false; // Set highlighted to false on mouseleave
    this.toggleHighlighted.emit(this.highlighted); // Emit the toggle event
  }
}