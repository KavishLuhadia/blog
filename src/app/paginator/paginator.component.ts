import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages!: number;
  pages! : number[];
  currentPage!:number;
  @Output() pageNumberClick = new EventEmitter<number>() ;

  constructor() { }

  ngOnInit(): void {
    
    this.pages = new Array(this.numberOfPages);

  }

  pageNumberClicked(pageNumber:number){
    console.log(pageNumber);
    this.pageNumberClick.emit(pageNumber);
  }

}
