import { Component, inject } from '@angular/core';

import { Note } from '../note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-editor',
  imports: [],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})
export class NoteEditor {
  protected readonly note: Note | undefined = undefined;
  private readonly noteService = inject(NoteService);

  constructor() {
    this.note = this.noteService.getNote(0);
  }
}
