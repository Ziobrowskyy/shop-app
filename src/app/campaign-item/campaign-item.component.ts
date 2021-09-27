import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Campaign} from "../campaign";

@Component({
  selector: 'campaign-item',
  styleUrls: ['./campaign-item.component.scss'],
  template: `
    <div class="campaign-item">
      <div class="campaign-header">{{campaign.name}}</div>
      <div class="content">
        <div class="content-left">
          <p>Location: {{campaign.city}}</p>
          <p>Distance: {{campaign.radius}}</p>
        </div>
        <div class="content-right">
          <p>Current bid: {{campaign.bid.amount}}</p>
          <p>Place your bid: {{campaign.bid.amount}}</p>
        </div>
      </div>
      <div class="controls">
        <button class="delete-button" (click)="handleRemove()">x</button>
      </div>
    </div>`
})
export class CampaignItemComponent {
  @Input() campaign!: Campaign;
  @Output() onRemove = new EventEmitter()
  @Output() onClick = new EventEmitter()

  handleClick() {
    this.onClick.emit(this.campaign.id)
  }

  handleRemove() {
    this.onRemove.emit(this.campaign.id)
  }
}
