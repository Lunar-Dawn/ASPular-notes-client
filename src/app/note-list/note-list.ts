import { Component, input } from '@angular/core';

import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
})
export class NoteList {
  public readonly notes = input.required<Note[]>();
}
