import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-post',
  template:
  `<mat-card>
  <mat-card-header>
    <mat-card-title>
      <h4>New Post</h4>
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <form>
  <mat-form-field style="width: 100%">
    <input [(ngModel)]="postMsg" name="description" matInput placeholder="Post Message">
  </mat-form-field>
  <br>
  <button (click)="post()" mat-raised-button color="primary">Post</button>
  </form>
  </mat-card-content>
</mat-card>
`
})
export class PostComponent implements OnInit {
  constructor( public apiService: ApiService) {}

  postMsg = '';

  post() {
    console.log(this.postMsg);
    this.apiService.postMessage({msg: this.postMsg});
  }

  ngOnInit() {
  }
}
