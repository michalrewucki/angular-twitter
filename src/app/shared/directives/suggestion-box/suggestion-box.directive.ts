import {Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appSuggestionBox]'
})
export class SuggestionBoxDirective implements OnChanges, OnInit {
  @HostBinding('style.display') display: string = "none";
  @HostBinding('style.top.px') @Input('top') topPosition: number = 0;
  @HostBinding('style.left.px') @Input('left') leftPosition: number = 0;
  @Input('show') show: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit(): void {
    this.renderer.setElementStyle(this.el.nativeElement, "position", "absolute");
    this.renderer.setElementStyle(this.el.nativeElement, "z-index", "10000");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty("show") && changes["show"].previousValue != changes["show"].currentValue) {
      this.display = this.show ? "block" : "none";
    }
  }

  alertFunc() {
    alert("dd");
  }
}
