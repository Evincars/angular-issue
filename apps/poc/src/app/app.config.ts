// import { ApplicationConfig } from '@angular/core';
// import { APP_CONFIGURATION } from '@cloud-cis/util';

export function appConfig(appConfiguration: any) {
  return {
    providers: [
      /*{
        provide: APP_CONFIGURATION,
        useValue: appConfiguration,
      },*/
      // uiConfigurationProvider,
      // {
      //   provide: CLOUD_CIS_SHOW_COMMON_ERROR,
      //   useFactory: (snackBar: SnackbarService) => {
      //     return (header: string, body: string) => {
      //       snackBar.errorSnackbar(header, body);
      //     };
      //   },
      //   deps: [SnackbarService],
      //   multi: false,
      // },
      // { provide: ErrorHandler, useClass: TopExceptionHandler },
      // {
      //   provide: MAT_ICON_DEFAULT_OPTIONS,
      //   useValue: <MatIconDefaultOptions>{ fontSet: 'material-icons-outlined' },
      // },
      // {
      //   provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      //   useValue: <MatCheckboxDefaultOptions>{ color: 'primary' },
      // },
      // {
      //   provide: EXPANSION_PANEL_ANIMATION_TIMING,
      //   useValue: '2000ms cubic-bezier(0.4,0.0,0.2,1)',
      // },
      // {
      //   provide: MAT_DIALOG_DEFAULT_OPTIONS,
      //   useValue: <MatDialogConfig>{
      //     enterAnimationDuration: 0,
      //     exitAnimationDuration: 0,
      //     minWidth: '300px',
      //     disableClose: true,
      //   },
      // },
      // {
      //   provide: MAT_RADIO_DEFAULT_OPTIONS,
      //   useValue: <MatRadioDefaultOptions>{ color: 'primary' },
      // },
      // {
      //   provide: MAT_TABS_CONFIG,
      //   useValue: <MatTabsConfig>{ animationDuration: '0', preserveContent: true },
      // },
      // { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
      // { provide: MAT_DATE_LOCALE, useValue: LocaleModel.Finnish },
      // {
      //   provide: MAT_DATE_LOCALE,
      //   useFactory: () => {
      //     const localizationService = inject(AbstractLocalizationService);
      //     const logService = inject(LogLocalService);
      //     const localeId = inject(LOCALE_ID);
      //     const appInstanceLocale: Locale = new Locale(localeId as LanguageCode);
      //
      //     // switch (userService.user.locale) {
      //     //   case 'en_US':
      //     //     return enUS;
      //     //   case 'sv_SE':
      //     //     return sv;
      //     //   case 'no_NO':
      //     //     return nn;
      //     //   case 'de_DE':
      //     //     return de;
      //     //   case 'fi_FI':
      //     //     return fi;
      //     //   default:
      //     //     logService.warn('Locale not registered: ' + userService.user.locale);
      //     //     return enUS;
      //     // }
      //   },
      // },
    ],
  };
}
