import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import ua from 'universal-analytics';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private _visitor;

  constructor(
    @Inject(DOCUMENT) private doc,
    private meta: Meta,
    private title: Title,
  ) {
    this._visitor = ua('UA-111721516-1');
  }

  addHeaderLabels(SEO: object) {
    this.sendPageAnalytics(SEO['canonical']);
    this.createMetaTags(SEO);
    this.createLinkForCanonicalURL(SEO['canonical']);
  }

  createLinkForCanonicalURL(canonicalUrl) {
    // Check if canonical url exists. If not exists then create new canonical url else update the existing tag
    if ( this.doc.querySelector('link[rel=\'canonical\']') === null || this.doc.querySelector('link[rel=\'canonical\']') === undefined ) {
      const link: HTMLLinkElement = this.doc.createElement('link');
      this.doc.head.appendChild(link);
      link.setAttribute('href', canonicalUrl);
      link.setAttribute('rel', 'canonical');
    } else {
      this.doc.querySelector('link[rel=\'canonical\']').setAttribute('href', canonicalUrl);
    }

  }

  createMetaTags(SEO: object) {
    for ( const label of Object.entries(SEO) ) {
      // Exclude canonical MetaTag
      if ( label[0] !== 'canonical') {
        this.writeMetaTags(label[0], label[1]);
      }
    }
  }

  writeMetaTags(tag, value) {
    if ( tag.substring(0, 2) === 'og' && value) {
      // Remove old metaTags
      if ( this.meta.getTag(`name="${tag.substring(3)}"`)) {
        this.meta.removeTag(`name="${tag.substring(3)}"`);
      }
      // Update or add metaTags
      this.meta.getTag(`property="${tag}"`)
        ? this.meta.updateTag({ property: tag, content: value })
        : this.meta.addTag( { property: tag, content: value }, true);
    } else {
      this.meta.getTag(`name="${tag}"`)
        ? this.meta.updateTag({ name: tag, content: value })
        : this.meta.addTag( { name: tag, content: value }, true);
    }
  }

  sendPageAnalytics(url) {
    // remove domain from url.
    url = url.replace('https://victordeandres.es/', '');
    // Send page to ua
    this._visitor.pageview(url).send();

  }
}
