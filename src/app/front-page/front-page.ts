import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteFilterer } from '../note';

import { NoteList } from '../note-list/note-list';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-front-page',
  imports: [
    NoteList,
    FormsModule,
  ],
  templateUrl: './front-page.html',
  styleUrl: './front-page.css',
})
export class FrontPage {
  private readonly noteService = inject(NoteService);
  protected notes = this.noteService.getAllNotes();

  protected readonly searchText = signal("")
  protected readonly searcher = computed(() => new NoteFilterer(this.searchText()))

  protected readonly filteredNotes = computed(() => this.notes.value().filter(n => this.searcher().matches(n)))
}
