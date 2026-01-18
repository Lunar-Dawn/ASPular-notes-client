import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  imports: [
    RouterLink,
  ],
  templateUrl: './note-list.html',
  styleUrl: './note-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteList {
  readonly notes = input.required<Note[]>()
}
