import { Component, Input, OnInit } from '@angular/core';

import { Commentform } from '../../../../shared/classes/commentform';

import { AngularFireDatabase } from '@angular/fire/database';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'blog-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
  providers: [ AngularFireDatabase ]
})

export class PostCommentComponent implements OnInit {

  @Input()
    idpost: string;

  public showComment: Boolean = false;
  public postComments: Object[] = [];

  private firebase;

  public comment = new Commentform('', '');

  constructor(
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    this.firebase = this.db.list(this.idpost).valueChanges()
      .subscribe( data => {
        this.postComments = [];
        data.forEach( comment => {
          this.postComments.push(comment);
        });
      });
  }

  onSubmit(): void {
    const newComment = {
      username: this.comment.name,
      comment: this.comment.message,
      commentdate: {
        day: new Date().toLocaleDateString(),
        hour: new Date().toLocaleTimeString()
      }
    };

    // Save data
    this.db.object(`${this.idpost}/${new Date().getTime()}`).set(newComment);
    // Initialize data.
    this.comment = new Commentform('', '');
    this.showComment = !this.showComment;
    // eof Initialize data.
  }

  enabledComment(): void {
    this.showComment = !this.showComment;
  }
}
