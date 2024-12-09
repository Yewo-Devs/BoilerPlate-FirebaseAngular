import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  GoogleSigninButtonDirective,
} from '@abacritt/angularx-social-login';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [SocialLoginModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId, {
              oneTapEnabled: false,
              prompt: 'consent',
            }),
          },
        ],
        onError: (err: unknown) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    GoogleSigninButtonDirective,
  ],
})
export class SocialSignOnModule {}
