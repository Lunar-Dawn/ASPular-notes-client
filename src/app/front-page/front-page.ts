import { Component } from '@angular/core';
import { NoteList } from '../note-list/note-list';

@Component({
  selector: 'app-front-page',
  imports: [
    NoteList
  ],
  templateUrl: './front-page.html',
  styleUrl: './front-page.css',
})
export class FrontPage {

}
