import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { NoteList } from '../note-list/note-list';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    NoteList,
    RouterLink,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private readonly noteService = inject(NoteService);
  public readonly notes = this.noteService.getAllNotes();

  private readonly router = inject(Router);

  protected newNote() {
    this.noteService.createNote().subscribe(note => this.router.navigate(["/note", note.id]))
  }
}
