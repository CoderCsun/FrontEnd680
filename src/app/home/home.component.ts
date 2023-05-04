import { Component, OnInit } from '@angular/core';
import { JiraService } from '../jira.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = new FormControl('');
  createTicket = false;
  description: any;
  constructor(
    private jiraService: JiraService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  submit(title: any) {

    this.jiraService.getTicketDesc(title).subscribe(
      (response: any) => {
        debugger
        const data = (response.description);
        this.description = data;
        this.createTicket = true;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

  }
  back() {
    this.createTicket = false;

  }
  create() {
    const input = JSON.stringify(this.description);
    this.jiraService.createJIRATicket(input).subscribe((res) => {
      alert('Created JIRA ticket successfully');
      location.reload();

    })
  }
}
