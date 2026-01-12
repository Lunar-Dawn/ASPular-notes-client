import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

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

  createNote(title: string = "New Note", content: string = "", tags = []): Observable<Note> {
    let req = this.http.post<Note>(`${this.url_base}/notes`, {
      title,
      content,
      tags,
    }).pipe(shareReplay({refCount: true, bufferSize: 1}));

    req.subscribe(_ => {
      // TODO: Replaying the GET here seems wasteful
      this.notes.reload()
    });

    return req;
  }

  updateNote(note: Note) {
    const req = this.http.put<Note>(`${this.url_base}/notes/${note.id}`, note)
      .pipe(shareReplay({refCount: true, bufferSize: 1}))

    req.subscribe(_ => {
      // TODO: Replaying the GET here seems wasteful as well
      this.notes.reload()
    });

    return req;
  }

  deleteNote(note: Note) {
    const req = this.http.delete(`${this.url_base}/notes/${note.id}`)
      .pipe(shareReplay({refCount: true, bufferSize: 1}))

    req.subscribe(_ => {
      // TODO: Here as well
      this.notes.reload()
    });

    return req;
  }
}
