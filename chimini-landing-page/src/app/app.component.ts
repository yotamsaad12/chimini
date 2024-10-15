import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chimini-landing-page';

  constructor(private dialog: MatDialog) {}

  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
