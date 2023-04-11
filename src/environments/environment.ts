// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const stagingServer = 'https://api-partners.nsdcindia.org/api/v2/nodeusermanagement/';
const localServer = 'http://localhost:4008/api/v2/nodeusermanagement/';
const pangstAPI = '';
const whatsAppAPI = '';
const s3APILocalServer = 'http://localhost:4010/upload/';
const s3APIStagingServer = '';

export const environment = {
  production: false,
  apiUrl: localServer,
  panGstService: pangstAPI,
  whatsappServices: whatsAppAPI,
  s3Services: s3APILocalServer
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
