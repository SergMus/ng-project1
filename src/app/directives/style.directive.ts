import { Directive, ElementRef, HostListener, Renderer2, Input, HostBinding } from "@angular/core";

@Directive({
    selector:'[appStyle]'
})

export class StyleDirective {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    @Input('dStyles') dStyles: {
        color?: string, 
        size?: string,
        border?: string
    } ; 

    @HostBinding('style.backgroundColor') bg:any = null;

    @HostListener('click', ['$event']) onClick(event: Event){
      console.log(event);
      
    }

    @HostListener('mouseenter') onEnter(){
        this.bg = 'yellow'
        this.renderer.setStyle(this.elRef.nativeElement, 'color', this.dStyles.color)
        this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border)
        this.renderer.setStyle(this.elRef.nativeElement, 'size', this.dStyles.size)
    }
    @HostListener('mouseleave') onLeave(){
        this.bg = null
        this.renderer.setStyle(this.elRef.nativeElement, 'color', null)
        this.renderer.setStyle(this.elRef.nativeElement, 'border', null)
        this.renderer.setStyle(this.elRef.nativeElement, 'size', null)
    }
}