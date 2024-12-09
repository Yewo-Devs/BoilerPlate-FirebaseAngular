import { Component, EventEmitter, Input, Output } from '@angular/core';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-google-signin',
  standalone: false,
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css'],
})
export class GoogleSigninComponent {
  @Input() buttonText = 'Sign in with Google';

  createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement('div');
    googleLoginWrapper.style.display = 'none';
    googleLoginWrapper.classList.add('custom-google-button');
    document.body.appendChild(googleLoginWrapper);
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '200',
    });

    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      'div[role=button]'
    ) as HTMLElement;

    return {
      click: () => {
        googleLoginWrapperButton?.click();
      },
    };
  };

  handleGoogleLogin() {
    let googleWrapper = this.createFakeGoogleWrapper();

    googleWrapper.click();
  }
}
