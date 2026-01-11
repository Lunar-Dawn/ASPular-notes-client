import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  imports: [
    RouterLink,
  ],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteList {
  private readonly noteService = inject(NoteService);
  protected notes = this.noteService.getAllNotes();
}
