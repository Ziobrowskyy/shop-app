import {Component, ViewChild} from '@angular/core';
import {Campaign} from "./campaign";
import API from "./API";
import {CampaignListComponent} from "./campaign-list/campaign-list.component";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>{{title}}</h1>
    <div class="content-wrapper">
      <form-container (formSubmitted)="onCampaignFormSubmitted($event)"></form-container>
      <campaign-list #list></campaign-list>
    </div>
  `,

})

export class AppComponent {
  title = 'shop-app';
  @ViewChild("list") campaignListComponent!: CampaignListComponent
  shouldShowForm: boolean = true

  onCampaignFormSubmitted = async (campaign: Campaign) => {
    const result = await API.insertCampaign(campaign).catch(err => console.log(err))
    this.campaignListComponent.onCampaignAdded(campaign)
    console.log(result)
  }


}
