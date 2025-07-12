'use server';

/**
 * @fileOverview Provides personalized AI tool recommendations based on a student's coding track, XP, and interests.
 *
 * - suggestAiTools - A function that generates AI tool suggestions for students.
 * - SuggestAiToolsInput - The input type for the suggestAiTools function.
 * - SuggestAiToolsOutput - The return type for the suggestAiTools function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAiToolsInputSchema = z.object({
  codingTrack: z
    .string()
    .describe('The student\u2019s current coding track (e.g., Python, JavaScript).'),
  xp: z.number().describe('The student\u2019s current XP (experience points).'),
  interests: z
    .string()
    .describe('The student\u2019s declared interests (e.g., web development, data science).'),
  tools: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      tryNowURL: z.string().url(),
    })
  ).describe('A list of available tools to choose from.'),
});
export type SuggestAiToolsInput = z.infer<typeof SuggestAiToolsInputSchema>;

const SuggestAiToolsOutputSchema = z.object({
  suggestedTools: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      tryNowURL: z.string().url(),
    })
  ).describe('A list of suggested tools.'),
  reasoning: z.string().describe('The reasoning behind the tool suggestions.'),
});
export type SuggestAiToolsOutput = z.infer<typeof SuggestAiToolsOutputSchema>;

export async function suggestAiTools(input: SuggestAiToolsInput): Promise<SuggestAiToolsOutput> {
  return suggestAiToolsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAiToolsPrompt',
  input: {schema: SuggestAiToolsInputSchema},
  output: {schema: SuggestAiToolsOutputSchema},
  prompt: `You are an AI tool recommendation expert for students learning to code. Given the student's coding track, XP, interests, and a list of available tools, suggest the most relevant tools to enhance their learning experience.

Coding Track: {{{codingTrack}}}
XP: {{{xp}}}
Interests: {{{interests}}}

Available Tools:
{{#each tools}}
- Name: {{this.name}}
  Description: {{this.description}}
  URL: {{this.tryNowURL}}
{{/each}}

Consider the student's coding track, XP, and interests to provide personalized recommendations. Explain your reasoning for suggesting each tool.

Output:
Suggested Tools: (List of tools with names, descriptions, and URLs)
Reasoning: (Explanation for each suggested tool)
`,
});

const suggestAiToolsFlow = ai.defineFlow(
  {
    name: 'suggestAiToolsFlow',
    inputSchema: SuggestAiToolsInputSchema,
    outputSchema: SuggestAiToolsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
