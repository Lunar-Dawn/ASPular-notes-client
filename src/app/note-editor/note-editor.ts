import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Note } from '../note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-editor',
  imports: [],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})
export class NoteEditor {
  protected note: Note | undefined = undefined;
  private readonly route = inject(ActivatedRoute);
  private readonly noteService = inject(NoteService);
  private note_id: number = -1;

  constructor(private ref: ChangeDetectorRef) {
    this.route.params.subscribe(params => {
      this.note_id = Number(params['id']);
      this.noteService.getNote(this.note_id).subscribe((resp => {
        this.note = resp;
        this.ref.markForCheck();
      }));
    })
  }
}
