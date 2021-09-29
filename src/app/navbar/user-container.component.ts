import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import API from "../API";
import {Router} from "@angular/router";

@Component({
  selector: 'user-container',
  styleUrls: ["./user-container.component.scss"],
  template: `
    <app-form *ngIf="!isLoggedIn" class="slide-form">
      <form-item name="login" [(ngModel)]="login"></form-item>
      <form-item name="password" inputType="password" [(ngModel)]="password"></form-item>

      <button class="button button-secondary" (click)="onLogin()" type="submit">login</button>
      <button class="button button-secondary" (click)="onRegister()" type="submit">register</button>
    </app-form>

    <div *ngIf="isLoggedIn" class="user-content">
      <button class="button button-secondary" (click)="onUserCampaigns()">show my campaigns</button>
      <button class="button button-secondary" (click)="onLogout()">logout</button>
    </div>
  `
})

export class UserContainerComponent implements OnInit {
  login: string = ""
  password: string = ""
  user?: User
  isLoggedIn: boolean = false

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const username = localStorage.getItem("user");
    if (username) {
      this.isLoggedIn = true
    }
  }

  onUserCampaigns() {
    const username = localStorage.getItem("user")
    this.router.navigate(["user-campaigns", username]).then()
  }

  onLogout() {
    this.isLoggedIn = false
    localStorage.removeItem("user")
  }
  private clearForm() {
    this.login = ""
    this.password = ""
  }

  onLogin() {
    API.login({login: this.login, password: this.password}).then(_ => {
      this.isLoggedIn = true
      localStorage.setItem("user", this.login)
      this.clearForm()
    }).catch(alert)
  }

  onRegister() {
    API.register({login: this.login, password: this.password}).then(_ => {
      this.isLoggedIn = true
      localStorage.setItem("user", this.login)
      this.clearForm()
    }).catch(alert)
  }
}
