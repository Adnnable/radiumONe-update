import { Component, Input, Output, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import appSettings from '../../../config/app-settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  @Input() appSidebarTwo: any;
	@Output() appSidebarEndToggled = new EventEmitter<boolean>();
	@Output() appSidebarMobileToggled = new EventEmitter<boolean>();
	@Output() appSidebarEndMobileToggled = new EventEmitter<boolean>();
	appSettings = appSettings;

  toggleAppSidebarMobile() {
		this.appSidebarMobileToggled.emit(true);
  }

	toggleAppSidebarEnd() {
		this.appSidebarEndToggled.emit(true);
	}

  toggleAppSidebarEndMobile() {
		this.appSidebarEndMobileToggled.emit(true);
  }

	toggleAppTopMenuMobile() {
	  this.appSettings.appTopMenuMobileToggled = !this.appSettings.appTopMenuMobileToggled;
	}

	toggleAppHeaderMegaMenuMobile() {
	  this.appSettings.appHeaderMegaMenuMobileToggled = !this.appSettings.appHeaderMegaMenuMobileToggled;
	}

	ngOnDestroy() {
	  this.appSettings.appTopMenuMobileToggled = false;
	  this.appSettings.appHeaderMegaMenuMobileToggled = false;
	}

  constructor(private renderer: Renderer2) {
  }
}
