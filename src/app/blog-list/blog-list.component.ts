import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts!: BlogPost[][]; 
  fullSummary!: string;
  numberOfPages!: number;
  currentPage!: number;
  @ViewChildren('tile') blogPostTileComponents!:QueryList<BlogPostTileComponent>;

  constructor(private truncatePipe: TruncatePipe, private blogDataService: BlogDataService  ) { }

  ngOnInit(): void {
    
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();
            this.numberOfPages = this.blogPosts.length;
 
                        
  }
  truncate(abc: string){
      return "Test";
   };

   updatePage(pageNumber: number){
    this.currentPage = pageNumber;
   };

   expandAll(){
      this.blogPostTileComponents.forEach(e => e.fullSummaryDisplay());
      };
    favAll(){
      this.blogPosts[this.currentPage].forEach(post=>post.isFav=true);
      }
}
