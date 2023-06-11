import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { SideModalDialogRef } from './side-modal/services/side-modal-dialog-ref.service';
import { SIDE_MODAL_DATA } from './side-modal/side-modal.contants';

@Component({
    selector: 'app-my-side-modal',
    template: `
        <div class="side-modal-header">
            <button (click)="close()">Close</button>

            <span>{{ data.header }}</span>
        </div>

        <div class="side-modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat lorem quis ipsum lacinia consectetur. Vivamus vel urna at turpis condimentum rutrum et vitae lectus. Donec sed sem tincidunt, maximus nisl vel, fringilla neque. Phasellus nec libero est. Maecenas turpis ipsum, hendrerit in mollis sed, vehicula non dui. Aliquam nec finibus risus, rhoncus ullamcorper quam. Aliquam sit amet imperdiet nulla, sit amet dapibus elit. Proin blandit accumsan blandit. Nulla malesuada porta turpis, non laoreet nisi facilisis tincidunt. Vestibulum pretium mi quis mi pellentesque, ac malesuada metus dictum. Sed convallis tortor arcu, non feugiat diam convallis eu. Duis hendrerit ipsum elit, et efficitur leo convallis ut. Nam et suscipit mauris. Donec eu nisl dapibus, tempor elit ut, rhoncus ligula. Sed a iaculis nisi.</p>
            
            <p>Aliquam pellentesque diam vel nunc sollicitudin dignissim. Suspendisse potenti. Donec facilisis, sapien quis congue mattis, enim nisl facilisis massa, non porta mauris risus eget ligula. Etiam ut turpis ac risus rhoncus suscipit. Curabitur sed porttitor odio. Maecenas ut arcu nunc. Phasellus pharetra viverra felis vel ultricies. Vivamus ut ante eu ante faucibus fermentum. Praesent sed erat est. Praesent in augue suscipit, maximus lorem at, viverra diam. Quisque dignissim condimentum arcu id cursus. Vivamus non risus quis lacus pulvinar hendrerit.</p>
            
            <p>Sed at justo efficitur, accumsan enim at, ullamcorper neque. Donec ullamcorper ac magna ac tincidunt. Suspendisse potenti. Donec et tortor purus. Etiam facilisis quis justo vel pretium. Etiam gravida molestie lacus ac iaculis. Mauris non consectetur felis. Donec vel elit odio. Integer quis suscipit risus. Nulla posuere rhoncus sagittis. Aenean vulputate libero a nibh lacinia rhoncus. Integer dapibus leo eu dolor viverra pretium. Phasellus rhoncus quam leo, in pretium augue pellentesque ut.</p>
        </div>
    `,
    styles: [
        `
        :host {
            display: block;
            padding: .25em;
        }

        .side-modal-header {
            display: flex;
            align-items: center;
            padding: .5em 1em;
            font-size: 16px;
            font-weight: 700;
        }
        
        .side-modal-header > span {
            margin-right: auto;
            margin-left: auto;
        }
        
        .side-modal-body {
            margin-top: 2em;
        }`
    ]
})
export class MySideModalComponent implements OnInit, OnDestroy {
    constructor(
        public sideModalRef: SideModalDialogRef,
        @Inject(SIDE_MODAL_DATA) public data: any
    ) { }

    ngOnInit() {
        console.log('In init');
    }

    close(): void {
        this.sideModalRef.close();
    }

    ngOnDestroy(): void {
        console.log('In destroy');
    }

}