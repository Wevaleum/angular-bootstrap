import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ServerConfigKeys, ServerConfigModel } from '../models/server-config-model';

@Injectable({
  providedIn: 'root'
})
export class ServerConfig {
  configUrl = environment.configFile;
  config: ServerConfigModel = {} as ServerConfigModel;

  constructor(private http: HttpClient) {}

  async load() {
    const configFile = this.http.get<any>(this.configUrl);
    this.config = await lastValueFrom(configFile);
  }

  private getPath(pathKey: ServerConfigKeys): string {
    const keyTyped = pathKey.toString() as keyof typeof this.config;
    return this.config[keyTyped];
  }

  getServerUrl(serverePath: ServerConfigKeys) {
    return `${this.config.restBaseUrl}/${this.getPath(serverePath)}`;
  }
}

export function loadServiceConfigFile(serverConfig: ServerConfig) {
  return () => serverConfig.load();
}