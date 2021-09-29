import {Component} from '@angular/core';
import {Campaign} from "./campaign";
import API from "./API";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>{{title}}</h1>
    <div class="content-wrapper">
      <router-outlet (activate)="currentComponent = $event"></router-outlet>
    </div>
  `,

})

export class AppComponent {
  title = 'shop-app';
  currentComponent?: any

  onCampaignFormSubmitted = async (campaign: Campaign) => {
    await API.insertCampaign(campaign).catch(err => console.log(err))
    this.currentComponent?.addCampaign?.(campaign)
  }


}
