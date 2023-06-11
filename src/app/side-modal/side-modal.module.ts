import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkSideModalContainer } from './components/side-modal-container.component';

@NgModule({
    imports: [
      PortalModule
    ],
    exports: [],
    declarations: [
			CdkSideModalContainer
		],
    providers: [],
})
export class SideModalModule { }
