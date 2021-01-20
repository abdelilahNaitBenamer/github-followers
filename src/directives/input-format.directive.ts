import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) { }
  @Input('format') format:string = "";

  @HostListener('blur') onBlur(){
    let val:string =  this.el.nativeElement.value;
    if (this.format == "lowercase") {
      this.el.nativeElement.value=val.toLowerCase();
    }
    else{
      this.el.nativeElement.value=val.toUpperCase();
    }
  }
}
