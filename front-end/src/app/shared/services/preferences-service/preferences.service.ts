import { Injectable } from '@angular/core';
import { Preferences } from '../../models/preferences';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  constructor(private storageService: StorageService) {}

  setPreferences(preferences: Preferences) {
    this.storageService.setItem('prefs', JSON.stringify(preferences));
  }

  getPreferences() {
    let val: any = this.storageService.getItem('prefs');

    let prefs: Preferences = JSON.parse(val) as Preferences;

    if (prefs == null) {
      prefs = {} as Preferences;
    }

    return prefs;
  }
}
