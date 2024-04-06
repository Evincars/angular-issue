// import { HttpClientModule } from '@angular/common/http';
// import { ErrorHandler, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { CLOUD_CIS_SHOW_COMMON_ERROR, LocaleModel, SnackbarService, TopExceptionHandler } from '@cloud-cis/util';
// import { SpinnerOverlayComponent } from '@cloud-cis/ui';
// import { AppRoutingModule } from './app.routes';
// import { AppComponent } from './app.component';
// import { TopMenuComponent } from '@cloud-cis/top-menu/feature';
// import { MAT_DATE_LOCALE, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
// import { uiConfigurationProvider } from '../ui-configuration/ui-configuration.provider';
// import { MAT_ICON_DEFAULT_OPTIONS, MatIconDefaultOptions } from '@angular/material/icon';
// import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions } from '@angular/material/checkbox';
// import { EXPANSION_PANEL_ANIMATION_TIMING } from '@angular/material/expansion';
// import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
// import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioDefaultOptions } from '@angular/material/radio';
// import { MAT_TABS_CONFIG, MatTabsConfig } from '@angular/material/tabs';
//
// @NgModule({
//   declarations: [AppComponent],
//   bootstrap: [AppComponent],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     HttpClientModule,
//     SecurityModule,
//     MatSnackBarModule,
//     MatNativeDateModule,
//     LocalizationModule,
//     TopMenuComponent,
//     SpinnerOverlayComponent,
//   ],
//   providers: [
//     uiConfigurationProvider,
//     {
//       provide: CLOUD_CIS_SHOW_COMMON_ERROR,
//       useFactory: (snackBar: SnackbarService) => {
//         return (header: string, body: string) => {
//           snackBar.errorSnackbar(header, body);
//         };
//       },
//       deps: [SnackbarService],
//       multi: false,
//     },
//     { provide: ErrorHandler, useClass: TopExceptionHandler },
//     {
//       provide: MAT_ICON_DEFAULT_OPTIONS,
//       useValue: <MatIconDefaultOptions>{ fontSet: 'material-icons-outlined' },
//     },
//     {
//       provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
//       useValue: <MatCheckboxDefaultOptions>{ color: 'primary' },
//     },
//     {
//       provide: EXPANSION_PANEL_ANIMATION_TIMING,
//       useValue: '2000ms cubic-bezier(0.4,0.0,0.2,1)',
//     },
//     {
//       provide: MAT_DIALOG_DEFAULT_OPTIONS,
//       useValue: <MatDialogConfig>{
//         enterAnimationDuration: 0,
//         exitAnimationDuration: 0,
//         minWidth: '300px',
//         disableClose: true,
//       },
//     },
//     {
//       provide: MAT_RADIO_DEFAULT_OPTIONS,
//       useValue: <MatRadioDefaultOptions>{ color: 'primary' },
//     },
//     {
//       provide: MAT_TABS_CONFIG,
//       useValue: <MatTabsConfig>{ animationDuration: '0', preserveContent: true },
//     },
//     { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
//     { provide: MAT_DATE_LOCALE, useValue: LocaleModel.Finnish },
//     {
//       provide: MAT_DATE_LOCALE,
//       useFactory: () => {
//         const localizationService = inject(AbstractLocalizationService);
//         const logService = inject(LogLocalService);
//         const localeId = inject(LOCALE_ID);
//         const appInstanceLocale: Locale = new Locale(localeId as LanguageCode);
//
//         // switch (userService.user.locale) {
//         //   case 'en_US':
//         //     return enUS;
//         //   case 'sv_SE':
//         //     return sv;
//         //   case 'no_NO':
//         //     return nn;
//         //   case 'de_DE':
//         //     return de;
//         //   case 'fi_FI':
//         //     return fi;
//         //   default:
//         //     logService.warn('Locale not registered: ' + userService.user.locale);
//         //     return enUS;
//         // }
//       },
//     },
//   ],
// })
// export class AppModule {}
