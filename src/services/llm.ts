import { getEnvVar } from '../config/env';

class LLMService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = getEnvVar('VITE_LLM_API_KEY');
    this.baseUrl = getEnvVar('VITE_LLM_API_URL');
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from LLM service');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error calling LLM service:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const llmService = new LLMService();
