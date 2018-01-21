import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { NotificationOptions } from '@shared/models';

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  showMessage(message: string, options: NotificationOptions): MatSnackBarRef<SimpleSnackBar> {
    const ref = this.snackBar.open(message, options.closeText, { duration: options.duration });
    ref.onAction().subscribe(() => {
      options.link ? this.router.navigate([options.link]) : console.log('Without action link');
    });
    return ref;
  }
}
