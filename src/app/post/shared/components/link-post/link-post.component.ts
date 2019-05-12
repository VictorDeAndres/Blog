import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'blog-link-post',
  templateUrl: './link-post.component.html',
  styleUrls: ['./link-post.component.scss']
})
export class LinkPostComponent implements OnInit {

  @Input() sourcePhoto: string;
  @Input() postTitle: string;
  @Input() postSubTitle: string;
  @Input() postPublishInfo: string;
  @Input() postLink: string;
  @Input() idLink: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      // Before find element check isn't ssr
      if ( typeof navigator !== 'undefined' ) {
        if ( this.sourcePhoto ) {
          document.querySelector(`.link__post__photo#${this.idLink}`)['src'] = this.sourcePhoto;
        }
        if ( this.postTitle ) {
          document.querySelector(`.link__post__title__title#${this.idLink}`).innerHTML = this.postTitle;
        }
        if ( this.postSubTitle ) {
          document.querySelector(`.link__post__title__subTitle#${this.idLink}`).innerHTML = this.postSubTitle;
        }
        if ( this.postPublishInfo ) {
          document.querySelector(`.link__post__title__publishInfo#${this.idLink}`).innerHTML = this.postPublishInfo;
        }
      }
    }, 0);
  }

  public openLink(): void {
    this.router.navigate([this.postLink]);
  }

}
