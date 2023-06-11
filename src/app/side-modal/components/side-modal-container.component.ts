import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, EmbeddedViewRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'cdk-side-modal-container',
	templateUrl: './side-modal-container.component.html',
	styles: [
		`:host {
			width: 490px;
			background: #ffffff;
		}`
	],
})

export class CdkSideModalContainer extends BasePortalOutlet {
	@ViewChild(CdkPortalOutlet, { static: true }) portalOutlet!: CdkPortalOutlet;

	attachTemplatePortal<T>(portal: TemplatePortal<T>): EmbeddedViewRef<T> {
		const result = this.portalOutlet.attachTemplatePortal(portal);
		return result;
	}

	attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
		const result = this.portalOutlet.attachComponentPortal(portal);

		return result;
	}
}