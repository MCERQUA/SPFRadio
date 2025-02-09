import OpenAI from 'openai';
import { getEnvVar } from '../config/env';

class OpenAIService {
  private client: OpenAI;
  private threadId: string | null = null;
  private assistantId: string;

  constructor() {
    this.client = new OpenAI({
      apiKey: getEnvVar('VITE_OPENAI_API_KEY'),
      dangerouslyAllowBrowser: true
    });
    this.assistantId = getEnvVar('VITE_OPENAI_ASSISTANT_ID');
  }

  async initializeThread() {
    const thread = await this.client.beta.threads.create();
    this.threadId = thread.id;
    return thread.id;
  }

  async sendMessage(content: string) {
    if (!this.threadId) {
      await this.initializeThread();
    }

    // Add the user's message to the thread
    await this.client.beta.threads.messages.create(
      this.threadId!,
      { role: "user", content }
    );

    // Run the assistant
    const run = await this.client.beta.threads.runs.create(
      this.threadId!,
      { assistant_id: this.assistantId }
    );

    // Wait for the completion
    let runStatus = await this.client.beta.threads.runs.retrieve(
      this.threadId!,
      run.id
    );

    // Poll for completion
    while (runStatus.status === "in_progress" || runStatus.status === "queued") {
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await this.client.beta.threads.runs.retrieve(
        this.threadId!,
        run.id
      );
    }

    // Get the messages
    const messages = await this.client.beta.threads.messages.list(
      this.threadId!
    );

    // Return the latest assistant message
    const lastMessage = messages.data
      .filter(message => message.role === "assistant")
      .shift();

    return lastMessage?.content[0]?.text?.value || "I apologize, but I couldn't process your request.";
  }
}

export const openaiService = new OpenAIService();
