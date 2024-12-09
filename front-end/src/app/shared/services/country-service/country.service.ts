import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/name';

  private rapidApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
  private apiKey = '92945b58acmsh03bc281e504e9ecp1f842ejsn6095dd0dd607'; // Add your API key here

  constructor(private http: HttpClient) {}

  getCountries(query: string): Observable<string[]> {
    const url = `${this.apiUrl}/${query}`;
    return this.http.get<any[]>(url).pipe(
      debounceTime(300),
      map((countries) => countries.map((country) => country.name.common)) // Map to string array
    );
  }

  getCities(
    query: string,
    selectedCountryNames: string[]
  ): Observable<string[]> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    });

    const url = `${this.rapidApiUrl}?namePrefix=${query}`;

    return this.http.get<any>(url, { headers }).pipe(
      debounceTime(300),
      map((response) => {
        if (selectedCountryNames && !selectedCountryNames.includes('Global')) {
          const filteredCities = response.data.filter(
            (city: any) => selectedCountryNames.includes(city.country) // Filter based on country name
          );
          return filteredCities.map((city: any) => city.name); // Return city names as array of strings
        }
        return response.data.map((city: any) => city.name);
      })
    );
  }

  getLanguages(): Observable<string[]> {
    const url = `https://restcountries.com/v3.1/all`;

    return this.http.get<any[]>(url).pipe(
      debounceTime(300),
      map((countries) => {
        // Extract languages from all countries, flatten, and remove duplicates
        const languagesSet = new Set<string>();
        countries.forEach((country) => {
          const languages = Object.values(country.languages || {});
          languages.forEach((language) => languagesSet.add(language as string));
        });
        return Array.from(languagesSet); // Convert Set back to an array
      })
    );
  }
}
