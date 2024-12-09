import { Injectable } from '@angular/core';
import { Preferences } from '../../models/preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  constructor() {}

  setPreferences(preferences: Preferences) {
    localStorage.setItem('prefs', JSON.stringify(preferences));
  }

  getPreferences() {
    let val: any = localStorage.getItem('prefs');

    let prefs: Preferences = JSON.parse(val) as Preferences;

    if (prefs == null) {
      prefs = {} as Preferences;
    }

    return prefs;
  }
}
