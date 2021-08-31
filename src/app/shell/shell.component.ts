import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, AfterContentInit {

  @ContentChild('appHeader') headerElem!: ElementRef;
  @ContentChild('appBody') bodyElem!: any;

  constructor() { }
  
  ngOnInit(): void {
  
  
  }

  ngAfterContentInit(): void {
    console.log(this.headerElem);
    console.log(this.bodyElem);  
  }

  

}
