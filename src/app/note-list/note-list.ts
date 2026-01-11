import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Note } from '../note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  imports: [
    RouterLink
  ],
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
