import {Component, EventEmitter, Output} from '@angular/core';
import {Campaign, City} from "../campaign";

@Component({
  selector: 'campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})

export class CampaignFormComponent {
  @Output() onSubmitted = new EventEmitter()
  name: string = ""
  radius: number = 10
  startingBid: number = 250
  fund: number = 100
  city: City = City.Cracow
  // @ts-ignore
  cities: Array<City> = Object.keys(City).map(key => City[key])

  onSubmit() {
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      bid: {amount: this.startingBid, minAmount: this.startingBid},
      campaignFund: this.fund,
      keywords: [],
      name: this.name,
      radius: this.radius,
      status: true,
      city: this.city
    }
    this.onSubmitted.emit(newCampaign)
  }

}
