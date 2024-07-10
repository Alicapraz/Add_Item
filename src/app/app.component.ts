import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itemList: string[] = [];
  inputValue: string = '';

  addItem() {
    if (this.inputValue.trim() !== '') {
      this.itemList.push(this.inputValue.trim());
      this.inputValue = '';
    }
  }
  
}
