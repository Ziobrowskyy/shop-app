import {Component, Input, OnInit} from '@angular/core';
import {Campaign} from "../campaign";

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {
  @Input() campaign!: Campaign;

  constructor() {
  }

  ngOnInit(): void {
  }

}
