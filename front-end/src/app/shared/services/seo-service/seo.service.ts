import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private seoData: any;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient,
    private router: Router
  ) {
    this.loadSeoData();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.url.split('/').pop()),
        switchMap((route) => this.getSeoData(route))
      )
      .subscribe((data: any) => {
        if (data) {
          this.updateTitle(
            data.hideTitlePreface
              ? data.title
              : environment.saasName + ' | ' + data.title
          );
          this.updateMetaTags([
            { name: 'description', content: data.description },
            { name: 'keywords', content: data.keywords },
          ]);
        }
      });
  }

  private loadSeoData() {
    this.http.get('../../../../assets/seo.json').subscribe((data) => {
      this.seoData = data;
    });
  }

  private getSeoData(route: string): Observable<any> {
    const data = this.seoData ? this.seoData[route] : null;
    return of(data);
  }

  private updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  private updateMetaTags(metaTags: { name: string; content: string }[]) {
    metaTags.forEach((tag) => this.metaService.updateTag(tag));
  }
}
