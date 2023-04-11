const stagingServer = 'https://api-dvc.nsdcindia.org/api/v2/nodeusermanagement/';
const localServer = 'http://localhost:4007/api/v2/nodeusermanagement/';
const pangstAPI = '';
const whatsAppAPI = '';
const s3APILocalServer = 'http://localhost:4010/upload/';
const s3APIStagingServer = '';

export const environment = {
  production: true,
  apiUrl: stagingServer,
  panGstService: pangstAPI,
  whatsappServices: whatsAppAPI,
  s3Services: s3APILocalServer
};