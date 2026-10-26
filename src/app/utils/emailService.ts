// Web3Forms integration service for sending background emails directly to sales@vrntech.us

export const WEB3FORMS_ACCESS_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WEB3FORMS_KEY);

export interface Web3FormsPayload {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  [key: string]: any;
}

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function sendWeb3Form(payload: Web3FormsPayload): Promise<Web3FormsResponse> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: 'VRN Technologies Portal',
        botcheck: false,
        ...payload,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error('Web3Forms dispatch error:', error);
    return {
      success: false,
      message: error?.message || 'Network request failed',
    };
  }
}
