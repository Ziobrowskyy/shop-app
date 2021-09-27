import {Component, OnInit} from "@angular/core";
import {Campaign} from "../campaign";
import API from "../API";

@Component({
  selector: "campaign-list",
  styleUrls: ["./campaign-list.component.scss"],
  template: `
    <div class="campaign-wrapper">
      <div class="campaign-list-header">List of campaigns</div>
      <div class="campaign-list">
        <campaign-item *ngFor="let campaign of campaigns.reverse()" [campaign]="campaign" (onRemove)="onCampaignRemoved($event)"></campaign-item>
      </div>
    </div>`
})
export class CampaignListComponent implements OnInit {
  campaigns: Array<Campaign> = Array()

  async ngOnInit() {
    const result = await API.getCampaigns()
    this.campaigns = result.data.map((el: Campaign) => el)
  }

  onCampaignAdded = (campaign: Campaign) => {
    this.campaigns.push(campaign)
  }

  onCampaignRemoved = async (id: string) => {
    const result = await API.deleteCampaign(id).catch(err => {
      console.log("Cannot remove given item. " + err)
    })
    if (result) {
      const found = this.campaigns.find(el => el.id == id)
      if (found)
        this.campaigns.splice(this.campaigns.indexOf(found), 1)
    }
  }
}
