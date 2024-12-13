import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@Component({
  selector: 'app-privacy',
  imports: [SharedUiModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
})
export class PrivacyComponent {
  saasName: string = environment.saasName;
  saasUrl: string = environment.saasUrl;
}
