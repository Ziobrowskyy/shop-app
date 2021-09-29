import {Routes} from "@angular/router";
import {CampaignListComponent} from "./campaign-list/campaign-list.component";
import {CampaignDetailComponent} from "./campaign-detail/campaign-detail.component";

export const appRoutes: Routes = [
  {path: "campaigns", component: CampaignListComponent},
  {path: "campaign/:id", component: CampaignDetailComponent},
  {path: "user-campaigns", component: CampaignListComponent},
  {path: "", redirectTo: "campaigns", pathMatch: "full"},
]
