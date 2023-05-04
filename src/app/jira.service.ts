import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(
    private http: HttpClient
  ) { }
  getTicketDesc(id:any){
   return this.http.get<string>(`${environment.baseURL}openAI/GetData/${id}`)
  }
 
  createJIRATicket(input: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${environment.baseURL}Jira/CreateJiraIssue`, input, { headers });
  }
}
