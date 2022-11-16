import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm: FormGroup | undefined;
  @Output() formClose = new EventEmitter();
  suggestions: Issue[] = [];

  // FormBuilder is an Angular service that we use to build a reactive form in an easy and convenient way
  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    // FormGroup is used to group individual controls into a logical representation of a form
    this.issueForm = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required],
    });
    this.issueForm.controls.title.valueChanges.subscribe(
      (title: string) => this.suggestions = this.issueService.getSuggestions(title));
  }

  addIssue() {
    if(this.issueForm && this.issueForm.invalid) {
      // Mark all controls as touched when the form is invalid
      // Marking controls as touched makes validation messages appear automatically
      this.issueForm.markAllAsTouched();
      return;
    }
    // The value property of a FormGroup object contains the model of the form
    // The keys of the model match the property names of the Issue interface
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
