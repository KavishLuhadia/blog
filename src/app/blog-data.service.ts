import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData() : BlogPost[][] {
    return [
      [new BlogPost("Angular", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.","assets/angular.png"),
       new BlogPost("React", "BlogSummary","assets/react.png"),
       new BlogPost("Dynamics 365", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.","assets/d365.png")
      ]
      // [new BlogPost("Blog Post from component 4", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." ),
      //  new BlogPost("Blog Post from component 5", "BlogSummary"),
      //  new BlogPost("Blog Post from component 6", "Blog Summary in the best possible way beyond cloud 3")
      // ],
      // [new BlogPost("Blog Post from component 7", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." ),
      //  new BlogPost("Blog Post from component 8", "BlogSummary"),
      //  new BlogPost("Blog Post from component 9", "Blog Summary in the best possible way beyond cloud 3")
      // ]
];
  }
}
