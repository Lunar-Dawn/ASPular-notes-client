import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Note } from '../note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-editor',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})
export class NoteEditor {
  // TODO: Make this nice and handle errors.
  protected note: Observable<Note | undefined> | null = null;
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly noteService: NoteService = inject(NoteService);
  private note_id: number = -1;

  constructor() {
    this.route.params.subscribe(params => {
      this.note_id = Number(params['id']);
      this.note = this.noteService.getNote(this.note_id)
    })
  }
}
