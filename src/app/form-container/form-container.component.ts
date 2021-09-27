import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'form-container',
  styleUrls: ["form-container.component.scss"],
  template: `
    <div class="form-container">
      <button (click)="toggleForm()" class="button button-primary">add new campaign</button>
      <campaign-form class="slide-form" [ngClass]="{'close':shouldShowForm}" (onSubmitted)="formSubmitted.emit($event)"></campaign-form>
    </div>`
})

export class FormContainerComponent {
  @Output() formSubmitted = new EventEmitter()
  shouldShowForm: boolean = false

  toggleForm = () => {
    this.shouldShowForm = !this.shouldShowForm
  }
}
