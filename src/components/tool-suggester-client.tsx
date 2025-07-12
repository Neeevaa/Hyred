'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { suggestAiTools, type SuggestAiToolsOutput } from '@/ai/flows/suggest-ai-tools';
import { mockUser, tools } from '@/lib/mock-data';
import { Loader2, Wand2, ArrowRight } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  interests: z.string().min(10, {
    message: 'Please tell us a bit more about your interests.',
  }),
});

export function ToolSuggesterClient() {
  const [suggestions, setSuggestions] = useState<SuggestAiToolsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: mockUser.interests,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestAiTools({
        codingTrack: mockUser.codingTrack,
        xp: mockUser.xp,
        interests: values.interests,
        tools: tools,
      });
      setSuggestions(result);
    } catch (error) {
      console.error('Error getting suggestions:', error);
      toast({
        title: 'Error',
        description: 'Failed to get tool suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Your Details</CardTitle>
          <CardDescription>Confirm your details and let our AI work its magic.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                      <FormLabel>Current Track</FormLabel>
                      <Input value={mockUser.codingTrack} disabled />
                  </div>
                  <div className="space-y-1">
                      <FormLabel>Experience (XP)</FormLabel>
                      <Input value={mockUser.xp} disabled />
                  </div>
              </div>
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Web Development, Data Science, Game Dev" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Suggest Tools
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
        <div className="mt-8">
          <Card className="max-w-2xl mx-auto shadow-lg">
             <CardHeader>
                <Skeleton className="h-8 w-3/4" />
             </CardHeader>
             <CardContent className="space-y-4">
                <Skeleton className="h-20 w-full" />
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-6 w-1/2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                </div>
             </CardContent>
          </Card>
        </div>
      )}

      {suggestions && (
        <div className="mt-8">
          <Card className="max-w-2xl mx-auto shadow-lg bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Wand2 /> Here are your personalized suggestions!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Reasoning</h3>
                <p className="text-muted-foreground">{suggestions.reasoning}</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Suggested Tools</h3>
                {suggestions.suggestedTools.map((tool) => (
                  <Card key={tool.name} className="bg-card">
                    <CardHeader>
                      <CardTitle>{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tool.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="p-0">
                        <a href={tool.tryNowURL} target="_blank" rel="noopener noreferrer">
                          Try it now <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
