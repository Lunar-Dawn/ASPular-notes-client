import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';

import { Note } from '../note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-editor',
  imports: [
    FormsModule,
  ],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.scss',
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
      })
    })
  }

  private timeoutId: number = 0;

  queueUpdateNote(event: Event) {
    event.preventDefault();

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.updateNote()
    }, 500)
  }

  updateNote() {
    this.noteService.updateNote(this.note()!);
  }

  protected textInput = signal("");

  addTag(event: Event) {
    event.preventDefault();
    this.note.update(n => {
      n?.tags.push(this.textInput())
      this.textInput.set("")
      return n
    })
    this.updateNote()
  }

  removeTag(tag: string) {
    this.note.update(n => {
      n!.tags = n!.tags.filter(t => t !== tag)
      return n
    })
    this.updateNote()
  }

  deleteNote() {
    this.noteService.deleteNote(this.note()!).subscribe(_ => this.router.navigate(['/']))
  }
}
