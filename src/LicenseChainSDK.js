
class LicenseChainSDK {
    constructor(apiBaseUrl, apiKey) {
        this.apiBaseUrl = apiBaseUrl;
        this.apiKey = apiKey;
    }

    async validateLicense(licenseKey, userId) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/validate-license`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({ licenseKey, userId })
            });

            const data = await response.json();
            if (response.ok) {
                return data; // Successfully validated
            } else {
                throw new Error(data.message || 'License validation failed');
            }
        } catch (error) {
            console.error('Error validating license:', error);
            throw error;
        }
    }
}

export default LicenseChainSDK;
