import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly url_base = "http://localhost:5288"
  private readonly http = inject(HttpClient);

  private readonly notes: HttpResourceRef<Note[]> = httpResource<Note[]>(() => `${this.url_base}/notes`, {defaultValue: []});

  getAllNotes(): HttpResourceRef<Note[]> {
    return this.notes;
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.url_base}/notes/${id}`);
  }
}
