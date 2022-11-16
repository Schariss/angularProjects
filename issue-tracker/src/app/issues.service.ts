import { Injectable } from '@angular/core';
import { issues } from 'src/assets/mock-issues';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = issues;

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = ++this.issues.length;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    this.issues = this.issues.map(is => {
      if(is === issue){
        return {...issue, completed: new Date()};
      }
      return is;
    });
  }

  getSuggestions(title: string): Issue[] {
    if(title.length > 3) {
      return this.issues.filter( issue => issue.title.indexOf(title) != -1);
    }
    return [];
  }
  
}
