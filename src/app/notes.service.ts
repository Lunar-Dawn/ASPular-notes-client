import { Injectable } from '@angular/core';

import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  protected readonly notes: Note[] = [
    {
      id: 0,
      title: "Note 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus tristique, semper augue in, faucibus ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in dui consectetur metus laoreet dapibus vitae eget lorem. Donec ut magna eleifend, efficitur ante in, lobortis est. Fusce iaculis enim a magna porttitor venenatis. Phasellus aliquam sem quis placerat semper. Nulla molestie faucibus odio, ut blandit ex suscipit id. Donec pharetra leo risus, nec ultrices ipsum viverra eu. Pellentesque hendrerit tortor et lacus finibus, et dignissim erat egestas. Mauris cursus, leo ornare cursus pellentesque, turpis turpis vestibulum est, ut commodo metus leo eget nulla. In hac habitasse platea dictumst. "
    },
    {
      id: 1,
      title: "Note 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna augue, vulputate sed pellentesque a, condimentum eget nulla. Proin a dignissim ex, eu iaculis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum commodo consequat ligula, sit amet condimentum erat facilisis non. Pellentesque laoreet egestas nibh, vel ullamcorper ligula maximus et. Vestibulum gravida vestibulum varius. Aenean feugiat tortor ac laoreet mattis. Integer maximus congue libero sit amet cursus. Nunc volutpat dapibus justo, ac sodales mauris tristique vitae. Nullam aliquet, elit a blandit gravida, ex lectus pellentesque eros, et tempor diam risus sed odio. Proin iaculis sagittis lacus, mollis volutpat urna. Quisque semper accumsan massa, vitae rutrum arcu euismod vitae. Nulla facilisi. "
    },
    {
      id: 2,
      title: "Note 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a arcu vel enim gravida placerat vel id sem. Mauris a lectus in mi cursus posuere. Duis odio diam, tincidunt vitae felis dapibus, iaculis iaculis est. Morbi luctus tortor vel congue mattis. Donec vulputate neque in erat lobortis imperdiet. Fusce malesuada et leo id vestibulum. In at dolor ut justo tempus cursus. Vivamus eget lectus eget nunc aliquam maximus sit amet vel ex. Aliquam libero diam, maximus sit amet justo porttitor, commodo feugiat dolor. Phasellus nec diam commodo, fermentum tellus eu, ullamcorper arcu. Donec eget eleifend turpis, et pretium sapien. Quisque sed odio lorem. Aliquam dolor libero, mattis in justo dapibus, facilisis fringilla lorem. Sed quis erat nibh. Sed et urna sed erat gravida lobortis. "
    },
    {
      id: 3,
      title: "Note 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ante malesuada, luctus ipsum quis, congue lorem. Sed aliquam laoreet volutpat. In tincidunt nisi eget feugiat consequat. Maecenas consectetur blandit eros, lobortis eleifend mi laoreet non. Cras vehicula, magna quis fringilla venenatis, elit turpis euismod ante, at commodo tortor ipsum at lorem. Donec sit amet sem eget dolor ultrices egestas ut in augue. Nam et mauris ex. Nam blandit, urna et ultrices pretium, mauris arcu efficitur velit, ac tristique sapien est ut velit. Curabitur sit amet ex a augue viverra ornare. Aenean diam metus, consequat vitae arcu eget, condimentum fermentum nisl. Integer rhoncus eleifend vehicula. Cras vitae leo nec nulla porta efficitur. Sed imperdiet risus erat. "
    },
    {
      id: 4,
      title: "Note 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum nisl massa, sed consectetur nisl tincidunt non. Duis vel lobortis eros. Aenean id purus mattis, molestie ante quis, rhoncus turpis. Quisque eu erat eget erat cursus feugiat. Donec vehicula efficitur arcu, non convallis dolor molestie eu. Nulla dignissim eros sit amet venenatis dapibus. Quisque et massa bibendum, varius ante vitae, ultrices erat. Nulla commodo metus sed varius facilisis. Pellentesque aliquam urna lorem, vitae iaculis risus congue porttitor. Quisque gravida suscipit metus, a finibus ante ullamcorper at. Duis laoreet interdum vestibulum. Vestibulum facilisis semper ullamcorper. Donec eget pretium nisi. Donec placerat sit amet risus id ultrices. Mauris interdum ultricies porttitor. "
    }
  ]

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNote(id: number): Note | undefined {
    return this.notes.find(note => note.id == id);
  }
}
