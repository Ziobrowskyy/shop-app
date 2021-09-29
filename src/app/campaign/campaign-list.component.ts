import {Component, OnInit} from "@angular/core";
import {Campaign} from "../campaign";
import API from "../API";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "campaign-list",
  styleUrls: ["./campaign-list.component.scss"],
  template: `
    <div class="campaign-wrapper">
      <div class="campaign-list">
        <campaign-item *ngFor="let campaign of filteredCampaigns.reverse()" [campaign]="campaign" (onRemove)="onCampaignRemoved($event)"></campaign-item>
      </div>
    </div>`
})
export class CampaignListComponent implements OnInit {
  nameFilter?: string
  campaigns: Array<Campaign> = Array()
  filteredCampaigns: Array<Campaign> = Array()
  userFilter?: string

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit() {
    const result = await API.getCampaigns()
    this.campaigns = result.data.map((el: Campaign) => el)
    if (this.route.snapshot.params["username"]) {
      this.userFilter = this.route.snapshot.params["username"]
      this.campaigns = this.campaigns.filter(el => el?.user == this.userFilter)
    }
    this.filterCampaigns()
  }

  filterCampaigns() {
    this.filteredCampaigns = this.campaigns.filter((el: Campaign) => {
      return (
        el.name.toLowerCase().match(this.nameFilter?.toLowerCase() || "") ||
        el.keywords.reduce((acc: boolean, curr: string) => curr.toLowerCase().match(this.nameFilter?.toLowerCase() || "") ? true : acc, false)
      )
    })
  }

  addCampaign = (campaign: Campaign) => {
    if (!this.userFilter || campaign.user == this.userFilter) {
      this.campaigns.push(campaign)
      this.filterCampaigns()
    }
  }

  updateFilter = (newFilter: string) => {
    this.nameFilter = newFilter
    this.filterCampaigns()
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
    this.filterCampaigns()
  }
}
