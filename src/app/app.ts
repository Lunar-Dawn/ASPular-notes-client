import { Component, signal } from '@angular/core';
import { Note } from './note';
import { NoteEditor } from './note-editor/note-editor';

@Component({
  selector: 'app-root',
  imports: [
    NoteEditor
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly current_note = signal<Note>({
    title: "Note 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus tristique, semper augue in, faucibus ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in dui consectetur metus laoreet dapibus vitae eget lorem. Donec ut magna eleifend, efficitur ante in, lobortis est. Fusce iaculis enim a magna porttitor venenatis. Phasellus aliquam sem quis placerat semper. Nulla molestie faucibus odio, ut blandit ex suscipit id. Donec pharetra leo risus, nec ultrices ipsum viverra eu. Pellentesque hendrerit tortor et lacus finibus, et dignissim erat egestas. Mauris cursus, leo ornare cursus pellentesque, turpis turpis vestibulum est, ut commodo metus leo eget nulla. In hac habitasse platea dictumst. "
  });
}
