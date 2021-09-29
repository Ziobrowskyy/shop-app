import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {noop} from "rxjs";

export type InputType = "text" | "number" | "password"

@Component({
  selector: 'form-item',
  styleUrls: ["./form-item.component.scss"],
  template: `
    <div class="form-item">
      <label>
        {{label || name}}
        <input [type]="inputType" name="{{name}}" (blur)="onBlur()" [(ngModel)]="value">
      </label>
    </div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormItemComponent),
      multi: true
    }
  ]
})
export class FormItemComponent implements ControlValueAccessor {
  @Input() name: string = ""
  @Input() label?: string
  @Input() inputType: InputType = "text"

  private _value: any = ""

  private onTouchedCallback: () => void = noop
  private onChangeCallback: (_: any) => void = noop

  get value(): any {
    return this._value
  }

  set value(value: any) {
    if (value !== this._value && value !== undefined) {
      this._value = value
      this.onChangeCallback(value)
    }
  }

  onBlur() {
    this.onTouchedCallback()
  }

  writeValue(value: any) {
    if (value !== this._value) {
      this._value = value
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }

}


