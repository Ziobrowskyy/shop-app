import {Component, OnInit} from '@angular/core';
import {Campaign} from "../campaign";
import API from "../API";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'campaign-detail',
  styleUrls: ["./campaign-detail.component.scss"],
  template: `
    <div class="campaign-detail">
      <div class="campaign-header">{{campaign?.name}}</div>
      <div class="content">
        <div class="content-details">
          <div class="content-field">
            <span class="label">Keywords:</span>
            <span class="value">
            <span *ngIf="campaign?.keywords?.length === 0">none</span>
            <span *ngIf="campaign?.keywords?.length !== 0">
              [
              <span *ngFor="let keyword of campaign?.keywords">{{keyword}}</span>
              ]
            </span>
          </span>
          </div>
          <div class="content-field">
            <span class="label">Status:</span><span class="value">{{campaign?.status ? "active" : "disabled"}}</span>
          </div>
          <div class="content-field">
            <span class="label">Location:</span><span class="value">{{campaign?.city}}</span>
          </div>
          <div class="content-field">
            <span class="label">Distance:</span><span class="value">{{campaign?.radius}}</span>
          </div>
        </div>
        <div class="content-bid">
          <div class="content-field">
            <span class="label">Current bid:</span><span class="value">{{campaign?.currentBid}}</span>
          </div>
          <div class="bid-controls">
            <div class="content-field">
              <label class="label">Place your bid:</label>
              <input type="number" [min]="campaign?.currentBid || 0" [(ngModel)]="bidValue"/>
            </div>
            <button class="button button-primary-light" type="button" (click)="placeBid()">place bid</button>
          </div>
        </div>
      </div>
    </div>`
})

export class CampaignDetailComponent implements OnInit {
  campaign?: Campaign
  bidValue?: number

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit() {
    console.log(this.route.snapshot.params)
    this.campaign = (await API.getCampaign(this.route.snapshot.params['id'])).data
    this.bidValue = this.campaign?.currentBid
  }

  async placeBid() {
    if (!this.bidValue)
      return
    API.update(this.campaign!.id, {currentBid: this.bidValue}).then(_ => {
      this.campaign!.currentBid = this.bidValue!
    }).catch(console.log)
  }
}
