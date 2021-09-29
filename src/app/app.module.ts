import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {CampaignItemComponent} from './campaign-item/campaign-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CampaignListComponent} from "./campaign-list/campaign-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CampaignFormContainerComponent} from "./campaign-form-container/campaign-form-container.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FormItemComponent} from "./form/form-item.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {CampaignDetailComponent} from "./campaign-detail/campaign-detail.component";
import {UserContainerComponent} from "./navbar/user-container.component";

@NgModule({
  declarations: [
    AppComponent,
    CampaignDetailComponent,
    CampaignFormContainerComponent,
    CampaignItemComponent,
    CampaignListComponent,
    FormComponent,
    FormItemComponent,
    NavbarComponent,
    UserContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
