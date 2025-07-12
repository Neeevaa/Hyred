import { ToolSuggesterClient } from '@/components/tool-suggester-client';
import { Bot } from 'lucide-react';

export default function ToolsPage() {
  return (
    <div className="grid gap-6">
      <header className="text-center">
        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
            <Bot className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">AI Tool Suggester</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            Tell us about your interests, and our AI will recommend the perfect tools from our library to accelerate your growth.
        </p>
      </header>

      <ToolSuggesterClient />
    </div>
  );
}
