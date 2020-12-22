import { BadRequestInputError } from './../src/app/commons/errors/bad-request-input-error';
import { NotFoundError } from './../src/app/commons/errors/not-found-errors';
import { AppError } from './../src/app/commons/errors/app-errors';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get(this.URL).catch(this.handlerError);
  }

  addPost(post: any) {
    return this.http
      .post(this.URL, JSON.stringify(post))
      .catch(this.handlerError);
  }

  deletePost(id: unknown) {
    return this.http.delete(`${this.URL}/${id}`).catch(this.handlerError);
  }

  private handlerError(errorResponse: Response): Observable<AppError> {
    switch (errorResponse.status) {
      case 400:
        return Observable.throw(new BadRequestInputError(errorResponse.json()));
      case 404:
        return Observable.throw(new NotFoundError(errorResponse));
      default:
        return Observable.throw(new AppError(errorResponse));
    }
  }
}
