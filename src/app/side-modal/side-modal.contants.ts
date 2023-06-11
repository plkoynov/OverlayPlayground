import { InjectionToken } from "@angular/core";
import { SideModalConfiguration } from "./models/side-modal-configuration.model";

export const DEFAULT_SIDE_MODAL_CONFIG: SideModalConfiguration = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop'
}

export const SIDE_MODAL_DATA = new InjectionToken<any>('SIDE_MODAL_DATA');