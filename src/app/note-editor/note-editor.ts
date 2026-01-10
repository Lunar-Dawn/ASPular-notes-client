import { Component, input } from '@angular/core';

import { Note } from '../note';

@Component({
  selector: 'app-note-editor',
  imports: [],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})
export class NoteEditor {
  readonly note_data = input.required<Note>();
}
