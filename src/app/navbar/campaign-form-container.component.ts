import {Component, EventEmitter, Output} from '@angular/core';
import {Campaign, City} from "../campaign";

@Component({
  selector: 'campaign-form-container',
  styleUrls: ["campaign-form-container.component.scss"],
  template: `
    <app-form class="slide-form" (onSubmitted)="submitForm()">
      <form-item name="name" [(ngModel)]="name"></form-item>
      <form-item name="radius" inputType="number" [(ngModel)]="radius"></form-item>
      <form-item name="starting-bid" label="starting bid" inputType="number" [(ngModel)]="startingBid"></form-item>
      <form-item name="fund" inputType="number" [(ngModel)]="fund"></form-item>

      <div class="form-item">
        <label>
          town
          <select name="city" [(ngModel)]="city">
            <option *ngFor="let city of cities">{{city}}</option>
          </select>
        </label>
      </div>

      <button class="button button-secondary" type="submit">add campaign</button>
    </app-form>
  `
})

export class CampaignFormContainerComponent {
  @Output() formSubmitted = new EventEmitter()
  @Output() close = new EventEmitter()

  name: string = ""
  radius: number = 10
  startingBid: number = 250
  fund: number = 100
  city: City = City.Cracow
  // @ts-ignore
  cities: Array<City> = Object.keys(City).map(key => City[key])


  submitForm() {
    const user = localStorage.getItem("user")
    const campaign: Campaign = {
      user: user?.toString() || "anon",
      id: Date.now().toString(),
      name: this.name,
      minBid: this.startingBid,
      currentBid: this.startingBid,
      campaignFund: this.fund,
      city: this.city,
      radius: this.radius,
      keywords: [],
      status: true
    }
    this.close.emit()
    this.formSubmitted.emit(campaign)
    this.name = ""
    this.radius = 10
    this.startingBid = 250
    this.fund = 100
    this.city = City.Cracow
  }
}
