import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  styleUrls: ["./navbar.component.scss"],
  template: `
    <header>
      <div class="header-wrapper">

        <a routerLink="/" class="brand hover-highlight">Campaigns<br/>App</a>

        <input class="search-input" type="text" (input)="onInputChange.emit($event)" placeholder="filter posts"/>

        <div class="menu hover-highlight" (click)="toggleMenu()">
          <img src="../../assets/images/hamburger-menu.svg" alt="menu"/>

          <div class="drop-down-menu" [ngClass]="{'hide-menu': !shouldShowMenu}">
            <span>show user</span>
            <span>add new campaign</span>
          </div>
        </div>

        <div class="text-and-button hover-highlight" (click)="toggleUser()">
          <span>user<br/>data</span>

          <img src="../../assets/images/user-image-white-fill.svg" alt="user image"/>
        </div>

        <div class="form-wrapper">
          <div class="text-and-button hover-highlight" (click)="toggleForm()">
            <span>add<br/>campaign</span>

            <img [ngClass]="{'add-rotate': shouldShowForm}" src="../../assets/images/add.svg" alt="add new"/>
          </div>

          <campaign-form-container class="form-container" [ngClass]="{'close':!shouldShowForm}" (close)="toggleForm()" (formSubmitted)="onFormSubmitted.emit($event)"></campaign-form-container>
        </div>

      </div>

    </header>
  `,
})

export class NavbarComponent {
  @Input() appName!: string
  @Output() onFormSubmitted = new EventEmitter()
  @Output() onInputChange = new EventEmitter()
  shouldShowForm: boolean = false
  shouldShowMenu: boolean = false

  toggleForm() {
    this.shouldShowForm = !this.shouldShowForm
  }

  toggleMenu() {
    this.shouldShowMenu = !this.shouldShowMenu
  }

  toggleUser() {

  }
}