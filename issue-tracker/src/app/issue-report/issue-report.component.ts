import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup | undefined;

  // FormBuilder is an Angular service that we use to build a reactive form in an easy and convenient way
  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    // FormGroup is used to group individual controls into a logical representation of a form
    this.issueForm = this.builder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: [''],
    });
  }

  addIssue() {
    // The value property of a FormGroup object contains the model of the form
    // The keys of the model match the property names of the Issue interface
    this.issueService.createIssue(this.issueForm?.value);
  }

}
