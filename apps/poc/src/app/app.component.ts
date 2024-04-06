import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'cloud-cis-root',
  template: `
    <!--    <feature-top-menu />-->
    <!--    <router-outlet />-->
  `,
  styles: `
      :host {
        display: flex;
        height:100%;
        flex-direction: column;
      }
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
