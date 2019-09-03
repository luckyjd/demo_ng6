import {Component, OnInit} from '@angular/core';
// import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private data: PostsService) {
  }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }

}
