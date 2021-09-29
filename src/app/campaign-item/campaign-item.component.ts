import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Campaign} from "../campaign";

@Component({
  selector: 'campaign-item',
  styleUrls: ['./campaign-item.component.scss'],
  template: `
    <div class="campaign-item">
      <div class="campaign-header">{{campaign?.name}}</div>
      <div class="content">
        <div class="details">
          <p>
            <span class="label">Location:</span><span class="value">{{campaign?.city}}</span>
          </p>
          <p>
            <span class="label">Distance:</span><span class="value">{{campaign?.radius}}</span>
          </p>
        </div>
        <div class="details">
          <p>
            <span class="label">Current bid:</span><span class="value">{{campaign?.currentBid}}</span>
          </p>
          <a class="more-button" routerLink="/campaign/{{campaign?.id}}">
            show more info
          </a>
        </div>
      </div>
      <div class="controls">
        <button class="delete-button" (click)="handleRemove()">x</button>
      </div>
    </div>`
})
export class CampaignItemComponent {
  @Input() campaign?: Campaign
  @Output() onRemove = new EventEmitter()
  @Output() onClick = new EventEmitter()

  handleRemove() {
    this.onRemove.emit(this.campaign?.id)
  }
}
