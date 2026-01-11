import { Component } from '@angular/core';

import { NoteEditor } from './note-editor/note-editor';
import { NoteList } from './note-list/note-list';

@Component({
  selector: 'app-root',
  imports: [
    NoteEditor,
    NoteList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
