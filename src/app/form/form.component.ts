import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <form (ngSubmit)="onSubmitted.emit($event)">
      <span class="form-title">{{title}}</span>
      <div class="form-body">
        <ng-content></ng-content>
      </div>
    </form>
  `
})

export class FormComponent {
  @Output() onSubmitted = new EventEmitter()
  @Input() title: string = ""
}
