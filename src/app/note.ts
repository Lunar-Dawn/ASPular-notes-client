export interface Note {
  id: number,
  title: string,
  content: string,
  tags: string[],
}

// Performance here is alright for now. Moving the filtering to SQL and throttling the input
// could be a good idea for the future if it slows down.
// Especially if pagination and a "summary" type when listing is used instead of full note fetching at all times.
export class NoteFilterer {
  words: string[];
  tags: string[];

  constructor(searchString: string) {
    const searchTerms = searchString.trim().split(/\s+/).map(s => s.toLowerCase())

    this.words = searchTerms.filter(s => !s.startsWith('#'))
    this.tags = searchTerms.filter(s => s.startsWith('#')).map(t => t.substring(1))
  }

  matches(note: Note): boolean {
    console.log(this, note)

    if (!this.tags.every(tag => note.tags.includes(tag))) {
      return false
    }

    return this.words.every(word => note.title.toLowerCase().includes(word) || note.content.toLowerCase().includes(word));
  }
}
