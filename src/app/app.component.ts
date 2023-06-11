import { Component } from '@angular/core';
import { SideModalService } from './side-modal/services/side-modal.service';
import { MySideModalComponent } from './my-side-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private sideModalDialog: SideModalService) { }

  openModal(): void {
    const dialogRef = this.sideModalDialog.open(MySideModalComponent, {
      data: {
        header: 'Some test header'
      }
    });
  }
}
