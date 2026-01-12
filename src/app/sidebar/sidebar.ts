import { Component, inject } from '@angular/core';

import { NoteList } from '../note-list/note-list';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    NoteList,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private readonly noteService = inject(NoteService);

  protected newNote() {
    this.noteService.createNote()
  }
}
