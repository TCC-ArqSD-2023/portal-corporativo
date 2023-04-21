import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly config = {
    apiUrl: 'http://gisa-apim.eastus.cloudapp.azure.com:9080'
    // apiUrl: 'https://safapi.azurewebsites.net'
    // apiUrl: 'https://localhost:7299'
  }
  constructor() { }

  getConfig() {
    return this.config;
  }

  getApiUrl(): string {
    return this.config.apiUrl;
  }
}
