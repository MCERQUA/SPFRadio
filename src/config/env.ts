import { z } from 'zod';

const envSchema = z.object({
  VITE_OPENAI_API_KEY: z.string().min(1, "OpenAI API key is required"),
  VITE_OPENAI_ASSISTANT_ID: z.string().min(1, "OpenAI Assistant ID is required"),
});

export const getEnvVar = (key: keyof z.infer<typeof envSchema>): string => {
  const value = import.meta.env[key];
  
  try {
    const parsed = envSchema.parse({
      VITE_OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY,
      VITE_OPENAI_ASSISTANT_ID: import.meta.env.VITE_OPENAI_ASSISTANT_ID,
    });
    return parsed[key];
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldError = error.errors.find(e => e.path.includes(key));
      if (fieldError) {
        throw new Error(fieldError.message);
      }
    }
    throw new Error(`Environment variable ${key} is not properly configured`);
  }
};
