import { Routes } from '@angular/router';
import { FrontPage } from './front-page/front-page';
import { NoteEditor } from './note-editor/note-editor';

export const routes: Routes = [
  {
    path: '',
    component: FrontPage,
    title: 'Your Notes'
  },
  {
    path: 'note/:id',
    component: NoteEditor,
    title: 'The Note Editor', // TODO: Set the title dynamically
  }
];
