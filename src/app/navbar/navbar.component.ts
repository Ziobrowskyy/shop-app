import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  styleUrls: ["./navbar.component.scss"],
  template: `
    <header>
      <div class="header-wrapper">

        <a routerLink="/" class="brand hover-highlight">Campaigns<br/>App</a>

        <input class="search-input" type="text" (input)="onInputChange.emit($event)" placeholder="filter posts"/>

        <div class="menu">
          <div class="hover-highlight" (click)="toggleMenu()">
            <img src="../../assets/images/hamburger-menu.svg" alt="menu"/>
          </div>
          <div class="drop-down-menu form-container" [ngClass]="{'hide-menu': !shouldShowMenu}">
            <span (click)="toggleUserMenu()">user controls</span>
            <span (click)="toggleCampaignForm()">add new campaign</span>
          </div>
        </div>

        <div class="form-wrapper user-wrapper">
          <div class="text-and-button hover-highlight" (click)="toggleUserMenu()">
            <span>user<br/>data</span>

            <img src="../../assets/images/user-image-white-fill.svg" alt="user image"/>
          </div>
          <user-container class="form-container" [ngClass]="{'close': !shouldShowUser}"></user-container>
        </div>

        <div class="form-wrapper campaign-form-wrapper">
          <div class="text-and-button hover-highlight" (click)="toggleCampaignForm()">
            <span>add<br/>campaign</span>

            <img [ngClass]="{'add-rotate': shouldShowForm}" src="../../assets/images/add.svg" alt="add new"/>
          </div>

          <campaign-form-container class="form-container" [ngClass]="{'close':!shouldShowForm}" (close)="toggleCampaignForm()" (formSubmitted)="onFormSubmitted.emit($event)"></campaign-form-container>
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
  shouldShowUser: boolean = false

  toggleCampaignForm() {
    this.shouldShowForm = !this.shouldShowForm
    this.shouldShowUser = false
    this.shouldShowMenu = false
  }

  toggleMenu() {
    const isAnyVisible = this.shouldShowUser || this.shouldShowForm || this.shouldShowMenu
    this.shouldShowMenu = !isAnyVisible
    this.shouldShowForm = false
    this.shouldShowUser = false
  }

  toggleUserMenu() {
    this.shouldShowUser = !this.shouldShowUser
    this.shouldShowMenu = false
    this.shouldShowForm = false
  }
}
