import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ServerConfigModel } from '../models/server-config-model';

@Injectable({
  providedIn: 'root'
})
export class ServerConfigService {
  configUrl = environment.configFile;
  config: ServerConfigModel = {} as ServerConfigModel;

  constructor(private http: HttpClient) {}

  async load() {
    const configFile = this.http.get<any>(this.configUrl);
    this.config = await lastValueFrom(configFile);
  }

  getConfig(): ServerConfigModel {
    return this.config;
  }

  getRestServiceUrl(servicePath: string) {
    return `${this.config.restBaseUrl}/${servicePath}`;
  }
}

export function loadServiceConfigFile(serverConfigService: ServerConfigService) {
  return () => serverConfigService.load();
}