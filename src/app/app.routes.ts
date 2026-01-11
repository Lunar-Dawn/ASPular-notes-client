import { Routes } from '@angular/router';
import { NoteEditor } from './note-editor/note-editor';

export const routes: Routes = [
  {
    path: 'note/:id',
    component: NoteEditor,
    title: 'The Note Editor', // TODO: Set the title dynamically
  }
];
