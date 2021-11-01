import { Component, ViewChild } from '@angular/core';
import { SelectAutocompleteComponent } from 'mat-select-autocomplete';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(SelectAutocompleteComponent) multiSelect: SelectAutocompleteComponent;
  options = [
    {
      display: 'One',
      value: '1'
    }, {
      display: 'Two',
      value: '2'
    }, {
      display: 'Three',
      value: '3'
    }, {
      display: 'Four',
      value: '4'
    }, {
      display: 'Five',
      value: '5'
    }, {
      display: 'Six',
      value: '6'
    }
  ];
  selectedOptions = ['1', '2', '3', '4'];

  selected = this.selectedOptions;
  showError = false;
  errorMessage = '';

  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }

  getSelectedOptions(selected) {
    this.selected = selected;
  }

  onResetSelection() {
    this.selectedOptions = [];
  }
}
