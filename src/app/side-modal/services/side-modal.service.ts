import { Injectable, Injector, Type } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { BasePortalOutlet, ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { SideModalConfiguration } from '../models/side-modal-configuration.model';
import { SideModalDialogRef } from './side-modal-dialog-ref.service';
import { DEFAULT_SIDE_MODAL_CONFIG, SIDE_MODAL_DATA } from '../side-modal.contants';
import { CdkSideModalContainer } from '../components/side-modal-container.component';

@Injectable({ providedIn: 'root' })
export class SideModalService {
	constructor(
		private overlay: Overlay,
		private injector: Injector
	) { }

	open<T>(componentType: ComponentType<T>, config: SideModalConfiguration = {}): SideModalDialogRef {
		const dialogConfig = this.getOverlayConfig({ ...DEFAULT_SIDE_MODAL_CONFIG, ...config });

		const overlayRef = this.overlay.create(dialogConfig);

		const dialogRef = new SideModalDialogRef(overlayRef);

		const dialogContainer = this.attachDialogContainer(config, dialogRef, overlayRef);

		this.attachDialogContainerContent<T>(componentType, config, dialogRef, dialogContainer);

		overlayRef.backdropClick().subscribe(() => dialogRef.close());

		return dialogRef;
	}

	private getOverlayConfig(config: SideModalConfiguration): OverlayConfig {
		const positionStrategy = this.overlay.position()
			.global()
			.centerHorizontally()
			.right();

		const overlayConfig = new OverlayConfig({
			hasBackdrop: config.hasBackdrop,
			scrollStrategy: this.overlay.scrollStrategies.block(),
			positionStrategy
		});

		return overlayConfig;
	}

	private attachDialogContainer(
		config: SideModalConfiguration,
		dialogRef: SideModalDialogRef,
		overlayRef: OverlayRef): BasePortalOutlet {
		const injector = Injector.create({
			parent: this.injector,
			providers: [
				{ provide: SideModalDialogRef, useValue: dialogRef },
				{ provide: SIDE_MODAL_DATA, useValue: config.data }
			]
		});

		const portal = new ComponentPortal(
			CdkSideModalContainer,
			null,
			injector);

		const componentRef = overlayRef.attach(portal);

		return componentRef.instance;
	}

	private attachDialogContainerContent<T>(
		componentType: ComponentType<T>,
		config: SideModalConfiguration,
		dialogRef: SideModalDialogRef,
		dialogContainer: BasePortalOutlet) {
		const injector = Injector.create({
			parent: this.injector,
			providers: [
				{ provide: SideModalDialogRef, useValue: dialogRef },
				{ provide: SIDE_MODAL_DATA, useValue: config.data }
			]
		});

		const portal = new ComponentPortal(componentType, null, injector);
		dialogContainer.attachComponentPortal(portal);
	}
}