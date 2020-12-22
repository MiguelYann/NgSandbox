import { BadRequestError } from './../commons/errors/bad-request-error';
import { BadRequestInputError } from './../commons/errors/bad-request-input-error';
import { NotFoundError } from './../commons/errors/not-found-errors';
import { AppError } from './../commons/errors/app-errors';
import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: (data) => (this.posts = data),
    });
  }

  addPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.postService.addPost(post).subscribe(
      (response) => {
        post = { title: input.value, ...response };
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadRequestInputError) {
        }
        throw error; // REPROPAGATE ERROR FOR HIT BY GLOBAL HANDLER
      }
    );
  }

  delete(post: any) {
    this.postService.deletePost(888500).subscribe({
      next: (data) => {
        const currentIndex = this.posts.indexOf(post);
        this.posts.splice(currentIndex, 1);
      },
      error: (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post is already deleted');
        }
        throw error;
      },
    });
  }
}
