import { ChangeDetectionStrategy, Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { FeatureNewAgreementComponent } from '@cloud-cis/agreement/feature';

@Component({
  standalone: true,
  selector: 'cloud-cis-move-in-page',
  template: `
    <div class="page-content">
      <feature-new-agreement />
    </div>
  `,
  styles: `.page-content{
    max-width:100vw
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeatureNewAgreementComponent],
})
export class MoveInPageComponent { }
