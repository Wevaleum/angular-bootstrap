import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerConfig } from './server-config';
import { ServerConfigKeys } from '../models/server-config-model';
import { User } from '../models/user-model';
import { Observable } from 'rxjs';
import { Page } from '../models/Page';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private serverConfig: ServerConfig) { }

  getUsers(): Observable<Page<User>> {
    let url = this.serverConfig.getServerUrl(
      ServerConfigKeys.USER_URL
    );

    return this.http.get<Page<User>>(url);
  }
}
