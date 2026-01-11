import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';

import { Note } from '../note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-editor',
  imports: [
    Field,
  ],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})
export class NoteEditor {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);
  private readonly noteService: NoteService = inject(NoteService);

  protected readonly note: WritableSignal<Note | null> = signal(null)

  protected readonly noteModel = signal({
    title: '',
    content: '',
  })
  protected readonly noteForm = form(this.noteModel);

  constructor() {
    this.route.params.subscribe(params => {
      this.noteService.getNote(params['id']).subscribe(note => {
        this.note.set(note)

        this.noteForm.title().value.set(note.title)
        this.noteForm.content().value.set(note.content)
      })
    })
  }

  private timeoutId: number = 0;

  queueUpdateNote(event: Event) {
    event.preventDefault();

    this.note.update(n => {
      if (n !== null) {
        n.title = this.noteForm.title().value()
        n.content = this.noteForm.content().value()
      }

      return n
    });

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.updateNote()
    }, 500)
  }

  updateNote() {
    const n = this.note();
    if (n !== null)
      this.noteService.updateNote(n);
  }

  deleteNote() {
    const n = this.note();
    if (n !== null)
      this.noteService.deleteNote(n).subscribe(_ => this.router.navigate(['/']))
  }
}
