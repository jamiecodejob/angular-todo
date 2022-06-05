import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'todo-example';

  allItems = [{ description: 'eat' }, { description: 'sleep' }, { description: 'play' }, { description: 'laugh' }];

  get items() {
    return this.allItems;
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
    });
  }

  removeItem(item: any) {
    var index = this.allItems.indexOf(item);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }
}
