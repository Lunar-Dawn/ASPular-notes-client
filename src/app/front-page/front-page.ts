import { Component, inject } from '@angular/core';

import { NoteList } from '../note-list/note-list';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-front-page',
  imports: [
    NoteList,
  ],
  templateUrl: './front-page.html',
  styleUrl: './front-page.css',
})
export class FrontPage {
  private readonly noteService = inject(NoteService);
  protected notes = this.noteService.getAllNotes();
}
