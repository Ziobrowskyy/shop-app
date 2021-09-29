import {Routes} from "@angular/router";
import {CampaignListComponent} from "./campaign/campaign-list.component";
import {CampaignDetailComponent} from "./campaign/campaign-detail.component";

export const appRoutes: Routes = [
  {path: "campaigns", component: CampaignListComponent},
  {path: "campaign/:id", component: CampaignDetailComponent},
  {path: "user-campaigns/:username", component: CampaignListComponent},
  {path: "", redirectTo: "campaigns", pathMatch: "full"},
]
