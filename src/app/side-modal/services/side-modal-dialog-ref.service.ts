import { OverlayRef } from "@angular/cdk/overlay";

export class SideModalDialogRef {
    constructor(
        private overlayRef: OverlayRef
    ) { }

    close(): void {
        this.overlayRef.dispose();
    }
}