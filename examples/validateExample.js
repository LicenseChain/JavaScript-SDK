
import LicenseChainSDK from '../src/LicenseChainSDK';

const sdk = new LicenseChainSDK('https://licensechain.app/api', 'your-api-key-here');

sdk.validateLicense('your-license-key-here', 'user-id-here')
    .then(response => console.log('License is valid:', response))
    .catch(error => console.error('License validation failed:', error));
