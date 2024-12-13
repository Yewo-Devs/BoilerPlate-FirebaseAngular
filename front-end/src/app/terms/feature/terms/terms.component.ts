import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@Component({
  selector: 'app-terms',
  imports: [SharedUiModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
})
export class TermsComponent {
  saasName: string = environment.saasName;
  saasUrl: string = environment.saasUrl;
}
