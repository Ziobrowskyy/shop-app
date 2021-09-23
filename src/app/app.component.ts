import {Component} from '@angular/core';
import {Campaign, City} from "./campaign";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app';
  campaigns: Array<Campaign> = Array()

  constructor() {
    this.campaigns = []
    for(let i = 0; i < random(5,10); i++) {
      const campaign = randomCampaign()
      console.log(campaign)
      this.campaigns.push(campaign)
    }
    console.log("campaigns count: " + this.campaigns.length)
  }
}

const random = (min: number = 0, max: number = 100) =>
  Math.floor(min + Math.random() * (max - min))

const randomCampaign = (): Campaign => {
  const randomCity: City = (() => {
    const values = Object.keys(City);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    // @ts-ignore
    return City[enumKey];
  })()


  const minBid = random(1000, 5000)

  return {
    bid: {amount: Math.random() > 0.5 ? (Math.random() + 1) * minBid : minBid, minAmount: minBid},
    campaignFund: 0,
    keywords: [],
    name: `Random name ${random(100000, 999999)}`,
    radius: random(5, 150),
    status: Math.random() > 0.5,
    town: randomCity
  }
}
