import { Component, HostBinding } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})

export class PrivacyPolicyComponent {

  @HostBinding('class.lang-ru') langRu = true;

  public pageTitle = "privacy";

  constructor(
    private titleService: Title,
  ) { 
    this.titleService.setTitle(this.pageTitle);
  }

  toggleLanguage(indicator) {
    this.langRu = indicator;
  }

}
