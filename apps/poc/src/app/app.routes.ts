import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { breadcrumbs, LeftMenuItemId, routes } from '@cloud-cis/util';
import { PageNotFoundComponent } from '@cloud-cis/ui';
import { agreementDetailsResolver } from '@cloud-cis/agreement/data-access';
import { accountingPointDetailsResolver } from '@cloud-cis/accounting-point/data-access';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: routes.search,
  },
  {
    path: routes.home,
    loadComponent: () => import('@cloud-cis/main-content/feature').then(c => c.HomePageComponent),
    canActivate: [MsalGuard],
    data: {
      reuseRouteKey: routes.home,
    },
    children: [
      {
        path: '',
        loadComponent: () => import('@cloud-cis/home/feature').then(c => c.HomeComponent),
      },
    ],
  },
  {
    path: routes.search,
    loadComponent: () => import('@cloud-cis/main-content/feature').then(c => c.SearchPageComponent),
    canActivate: [MsalGuard],
    data: {
      reuseRouteKey: routes.search,
    },
    children: [
      {
        path: '',
        loadComponent: () => import('@cloud-cis/ft-search/feature').then(c => c.FtSearchComponent),
      },
    ],
  },
  {
    path: routes.newCustomer,
    loadComponent: () => import('@cloud-cis/main-content/feature').then(c => c.NewCustomerPageComponent),
    canActivate: [MsalGuard],
    data: {
      reuseRouteKey: routes.newCustomer,
    },
    children: [
      {
        path: '',
        loadComponent: () => import('@cloud-cis/new-customer/feature').then(c => c.FeatureNewCustomerComponent),
      },
    ],
  },
  {
    path: routes.moveIn,
    loadComponent: () => import('@cloud-cis/main-content/feature').then(c => c.MoveInPageComponent),
    canActivate: [MsalGuard],
    data: {
      reuseRouteKey: routes.moveIn,
    },
    children: [
      {
        path: '',
        loadComponent: () => import('./features/move-in/move-in-page.component').then(c => c.MoveInPageComponent),
      },
    ],
  },
  {
    path: `${routes.customer}/${routes.customerCode}`,
    canActivate: [MsalGuard],
    loadComponent: () => import('@cloud-cis/main-content/feature').then(c => c.CustomerPageComponent),
    data: {
      reuseRouteKey: routes.summaryPage,
      breadcrumb: breadcrumbs.summaryPage,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: routes.summaryPage,
      },
      {
        path: routes.summaryPage,
        loadComponent: () => import('@cloud-cis/summary-page/feature').then(c => c.FeatureSummaryPageComponent),
        data: {
          reuseRouteKey: routes.summaryPage,
          leftMenuItemId: LeftMenuItemId.SummaryPage,
          breadcrumb: breadcrumbs.summaryPage,
        },
      },
      {
        path: routes.customerInformation,
        loadComponent: () => import('@cloud-cis/customer/feature').then(c => c.FeatureCustomerInformationComponent),
        data: {
          reuseRouteKey: routes.customerInformation,
          leftMenuItemId: LeftMenuItemId.CustomerInfo,
          breadcrumb: breadcrumbs.customerInformation,
        },
      },
      {
        path: routes.invoices,
        loadComponent: () => import('@cloud-cis/invoice/feature').then(c => c.FeatureInvoiceOverviewComponent),
        data: {
          reuseRouteKey: routes.invoices,
          leftMenuItemId: LeftMenuItemId.Invoices,
          breadcrumb: breadcrumbs.invoices,
        },
      },
      {
        path: `${routes.invoices}/${routes.invoiceDetails}`,
        loadComponent: () => import('@cloud-cis/invoice/feature').then(c => c.InvoiceDetailsComponent),
        data: {
          reuseRouteKey: routes.invoiceDetails,
          leftMenuItemId: LeftMenuItemId.Invoices,
          breadcrumb: breadcrumbs.invoiceDetails,
        },
      },
      {
        path: `${routes.invoiceConfigurations}/${routes.invoiceConfigurationDetails}`,
        loadComponent: () => import('@cloud-cis/invoice/feature').then(c => c.InvoiceConfigurationDetailsComponent),
        data: {
          reuseRouteKey: routes.invoiceConfigurationDetails,
          leftMenuItemId: LeftMenuItemId.Invoices,
          breadcrumb: breadcrumbs.invoiceConfigurationDetails,
        },
      },
      {
        path: routes.agreements,
        loadComponent: () => import('@cloud-cis/agreement/feature').then(c => c.FeatureAgreementOverviewComponent),
        data: {
          reuseRouteKey: routes.agreements,
          leftMenuItemId: LeftMenuItemId.Agreements,
          breadcrumb: breadcrumbs.agreements,
        },
      },
      {
        path: `${routes.agreements}/${routes.agreementDetails}`,
        loadComponent: () => import('@cloud-cis/agreement/feature').then(c => c.FeatureAgreementDetailsComponent),
        data: {
          reuseRouteKey: routes.agreementDetails,
          leftMenuItemId: LeftMenuItemId.Agreements,
          breadcrumb: breadcrumbs.agreementDetails,
        },
        resolve: {
          agreementDetailsResolver,
        },
      },
      {
        path: routes.accountingPoints,
        loadComponent: () =>
          import('@cloud-cis/accounting-point/feature').then(c => c.FeatureAccountingPointOverviewComponent),
        data: {
          reuseRouteKey: routes.accountingPoints,
          leftMenuItemId: LeftMenuItemId.AccountingPoints,
          breadcrumb: breadcrumbs.accountingPoints,
        },
      },
      {
        path: `${routes.accountingPoints}/${routes.accountingPointDetails}`,
        loadComponent: () =>
          import('@cloud-cis/accounting-point/feature').then(c => c.FeatureAccountingPointDetailComponent),
        data: {
          reuseRouteKey: routes.accountingPointDetails,
          leftMenuItemId: LeftMenuItemId.AccountingPoints,
          breadcrumb: breadcrumbs.accountingPointDetails,
        },
        resolve: {
          accountingPointDetailsResolver,
        },
      },
      {
        path: routes.campaignMembers,
        loadComponent: () => import('@cloud-cis/campaign-member/feature').then(c => c.FeatureCampaignMemberComponent),
        data: {
          reuseRouteKey: routes.campaignMembers,
          leftMenuItemId: LeftMenuItemId.CampaignMember,
          breadcrumb: breadcrumbs.campaignMembers,
        },
      },
      {
        path: routes.newAgreement,
        loadComponent: () =>
          import('./features/new-agreement/new-agreement-page.component').then(c => c.NewAgreementPageComponent),
        data: {
          leftMenuItemId: LeftMenuItemId.NewAgreement,
          reuseRouteKey: routes.newAgreement,
          breadcrumb: breadcrumbs.newAgreement,
        },
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routeCollectionResolver(cisRoutes, leftMenuResolver, 'LeftMenuItem'))],
//   exports: [RouterModule],
//   providers: [
//     {
//       provide: RouteReuseStrategy,
//       useClass: CisRouteReuseStrategy,
//     },
//   ],
// })
// export class AppRoutingModule {}
