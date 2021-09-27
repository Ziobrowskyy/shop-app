import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CampaignFormComponent} from './form/campaign-form.component';
import {CampaignItemComponent} from './campaign-item/campaign-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CampaignListComponent} from "./campaign-list/campaign-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormContainerComponent} from "./form-container/form-container.component";

@NgModule({
  declarations: [
    AppComponent,
    CampaignFormComponent,
    CampaignItemComponent,
    CampaignListComponent,
    FormContainerComponent,
    FormItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
