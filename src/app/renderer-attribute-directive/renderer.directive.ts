import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit {
@Input() defaultColor: string = 'transparent'
@Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string  //initial text color
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
 ngOnInit(){
  this.backgroundColor= this.defaultColor
  //  this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
 }
 @HostListener('mouseenter') mouseover(eventData: Event){
  //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
  this.backgroundColor = this.highlightColor
 }
 @HostListener('mouseleave') mouseleave(eventData: Event){
  //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent')
  this.backgroundColor = this.defaultColor
 }
}

//note this is using HostBinding
