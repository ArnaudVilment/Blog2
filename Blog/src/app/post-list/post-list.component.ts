import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  private _postLoveIts: number = 0;

  constructor() { }

  public get postLoveIts(): number {
    return this._postLoveIts;
  }
  public set postLoveIts(value: number) {
    this._postLoveIts = value;
  }

  ngOnInit() {
  }

  getColor() {
    if(this.postLoveIts > 0) {
      return 'green';
    } else if(this.postLoveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  love(signe: String) {
    if(signe === '+') {
      this.postLoveIts++;
    } else {
      this.postLoveIts--;
    }
  }
}
