import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CustomerRibbonOverviewComponent } from '@cloud-cis/ribbon/feature';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { FeatureNewAgreementComponent } from '@cloud-cis/agreement/feature';
import { CustomerStore } from '@cloud-cis/data-access';

@Component({
  standalone: true,
  selector: 'cloud-cis-new-contract-page',
  template: `
    <div class="page-content">
      <feature-new-agreement [customer]="customerstore?.customer()"></feature-new-agreement>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, CustomerRibbonOverviewComponent, FeatureNewAgreementComponent],
})
export class NewAgreementPageComponent {
  customerstore = inject(CustomerStore, { optional: true });
}
