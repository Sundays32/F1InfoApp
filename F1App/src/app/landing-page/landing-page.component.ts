import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private renderer: Renderer2, private el: ElementRef){}
  public scrollClick(){
    // const target =this.el.nativeElement.querySelector("#underbanner");
    // this.renderer.setProperty(target,'scrollTop',target.scrollTop+500)
    window.scrollTo({top:710, behavior:'smooth'});
    
  }
  
}
