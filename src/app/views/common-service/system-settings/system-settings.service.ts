import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseAPIUrl, baseURLType } from '../commom-api-url';

export interface SystemSetting {
  key: string;
  value: string;
  is_secret: boolean;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SystemSettingsService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = new BaseAPIUrl().getUrl(baseURLType);
  }

  getSettings(): Observable<any> {
    return this.http.get(`${this.baseUrl}system-settings/`);
  }

  updateSettings(payload: Record<string, string>): Observable<any> {
    return this.http.put(`${this.baseUrl}system-settings/update/`, payload);
  }
}
