import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent {

  @Input()
    titlepost: string;

  private url = '';

  constructor(private router: Router) {}

  launchTweet(titlePost): void {
    this.url = `https://twitter.com/intent/tweet?text="${titlePost}" por @Victor_deAndres http://victordeandres.es${this.router.url}`;
    window.open(encodeURI(this.url), '_blank');
  }

  launchFacebook(): void {
    this.url = `https://www.facebook.com/sharer/sharer.php?u=http://victordeandres.es${this.router.url}`;
    window.open(encodeURI(this.url), '_blank');
  }

  launchLinkedin(titlePost): void {
    // tslint:disable-next-line:max-line-length
    this.url = `https://www.linkedin.com/shareArticle?mini=true&url=http://victordeandres.es${this.router.url}&title=${titlePost}&summary="${titlePost}" por Victor de Andres&source=http://victordeandres.es${this.router.url}`;
    window.open(encodeURI(this.url), '_blank');
  }

  launchGoogle(): void {
    this.url = `https://plus.google.com/share?url=http://victordeandres.es${this.router.url}`;
    window.open(encodeURI(this.url), '_blank');
  }
}
