
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { dsaProblems } from '@/lib/mock-data';
import { ArrowRight, Code } from 'lucide-react';

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800 border-green-200',
  Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Hard: 'bg-red-100 text-red-800 border-red-200',
};

export default function DsaPage() {
  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold">Data Structures & Algorithms</h1>
        <p className="text-muted-foreground">Practice common problems to ace your technical interviews.</p>
      </header>
      <div className="space-y-4">
        {dsaProblems.map((problem) => (
          <Card key={problem.id} className="shadow-md transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>{problem.title}</CardTitle>
                    <CardDescription>Tags: {problem.tags.join(', ')}</CardDescription>
                </div>
                 <Badge className={`${difficultyColors[problem.difficulty]}`}>{problem.difficulty}</Badge>
            </CardHeader>
            <CardContent>
               <p className="text-muted-foreground line-clamp-2">{problem.description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="link" className="p-0">
                    <a href={problem.url} target="_blank" rel="noopener noreferrer">
                        Solve Problem <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
