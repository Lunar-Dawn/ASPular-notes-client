import { Component, inject } from '@angular/core';

import { Note } from '../note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
})
export class NoteList {
  protected readonly notes: Note[] = [];
  private readonly noteService = inject(NoteService);

  constructor() {
    this.notes = this.noteService.getAllNotes();
  }
}
