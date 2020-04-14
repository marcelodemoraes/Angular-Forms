import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  postUserSettingsForms(userStettings: UserSettings): Observable<UserSettings> {
    return of(userStettings);
  }
}
