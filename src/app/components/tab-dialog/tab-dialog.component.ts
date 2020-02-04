import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-tab-dialog',
  templateUrl: './tab-dialog.component.html',
  styleUrls: ['./tab-dialog.component.scss']
})
export class TabDialogComponent implements OnInit {

  text: string = 'Say something !';

  showNotification(text: string) {
    const ref = this.$sb.openFromComponent(NotificationComponent, {
      duration: 30000,
    });
    ref.instance.text = text;
  }

  constructor(private $dialogs: MatDialog, private $sb: MatSnackBar) { }

  ngOnInit() {
  }

  showDialog(): void {
    const dialogRef = this.$dialogs.open(DialogComponent, {
      width: '500px',
      data: { title: this.text }
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      let text = '';
      if (result && result.value) {
        text = `You have chosen OK with value ${result.value}`;
      } else {
        text = 'You have chosen cancel !';
      }
      this.showNotification(text);
    });
  }

}
