import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive( {
    selector: '[appMyHighlight]'
} )
export class MyHighlightDirective {
    elementRef: ElementRef;
    @Input() highlightColor: string;

    constructor( ref: ElementRef ) {
        this.elementRef = ref;
    }

    @HostListener( 'mouseover' ) onmouseover () {
        this.highlight( this.highlightColor );
    }

    @HostListener( 'mouseout' ) onmouseout () {
        this.highlight( null );
    }

    private highlight( color: string ) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }

}
