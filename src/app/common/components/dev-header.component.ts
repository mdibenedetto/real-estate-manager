import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'dev-header',
  template: `
    <strong>
        Environment: <span class="app-property">{{env.envName}}</span>
    </strong> -
    <strong>
        APP VERSION:<span class="app-property">{{env.VERSION}}</span>
    </strong> -
    <strong>
        Angular:<span class="app-property">{{env.AngularCore}}</span>
    </strong>
    `,
  styles: [`
        :host {
            display: ${environment.envName !== 'dev' ? 'none' : 'initial'}
        }

        .app-property{
            color: red
        }
    `]
})

export class DevHeaderComponent {
  public env = environment;
}
