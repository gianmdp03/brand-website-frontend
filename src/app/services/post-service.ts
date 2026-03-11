import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostRequest } from '../models/post-request';
import { Observable } from 'rxjs';
import { PostDet } from '../models/post-det';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = 'http://localhost:8080/api/posts';
  private http = inject(HttpClient);

  addPost(post: PostRequest): Observable<PostDet> {
    return this.http.post<PostDet>(this.apiUrl, post);
  }

  getPostById(id: number): Observable<PostDet> {
    return this.http.get<PostDet>(`${this.apiUrl}/${id}`);
  }

  listPosts(): Observable<PostDet[]> {
    return this.http.get<PostDet[]>(this.apiUrl);
  }

  updatePost(id: number, post: Partial<PostRequest>): Observable<PostDet> {
    return this.http.patch<PostDet>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
