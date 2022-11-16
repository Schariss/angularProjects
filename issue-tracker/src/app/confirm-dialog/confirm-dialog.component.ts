import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit(): void {
  }

  // Both methods will set the issueNo property to null
  // It will control whether the modal dialog is opened or not
  agree() {
    this.confirm.emit(true);
    this.issueNo = null;
  }

  disagree() {
    this.confirm.emit(false);
    this.issueNo = null;
  }

}
