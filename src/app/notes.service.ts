import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly url_base = "http://localhost:5288"
  private readonly http = inject(HttpClient);

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.url_base}/notes`);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.url_base}/notes/${id}`);
  }
}
