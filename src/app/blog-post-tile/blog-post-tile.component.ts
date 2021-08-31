import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
})
export class BlogPostTileComponent implements OnInit {
  @Input() posts!: BlogPost;

  fullSummary!: string;
  

  constructor(private truncatePipe: TruncatePipe, private elementRef : ElementRef) {
    console.log(this.elementRef);
   }

  ngOnInit(): void {
    this.fullSummary = this.posts.summary;
    this.posts.summary = this.truncatePipe.transform(this.posts.summary , '30');

    }; 
 truncater(abc:string) {
   return "Yayy!!";
 }
 fullSummaryDisplay(){
   this.posts.summary = this.fullSummary;
 }
 toggleFav(){
  this.posts.isFav = !this.posts.isFav;
}


}
