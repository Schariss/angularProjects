import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  // FormBuilder is an Angular service that we use to build a reactive form in an easy and convenient way
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

}
