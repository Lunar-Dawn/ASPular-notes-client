import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NoteList } from './note-list/note-list';
import { NoteService } from './notes.service';

@Component({
  selector: 'app-root',
  imports: [
    NoteList,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly noteService = inject(NoteService);

  protected newNote() {
    this.noteService.createNote()
  }
}
