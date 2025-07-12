import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { softSkills } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function SoftSkillsPage() {
  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold">Soft Skills</h1>
        <p className="text-muted-foreground">Essential skills for your tech career beyond coding.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {softSkills.map((skill) => (
          <Card key={skill.id} className="overflow-hidden shadow-lg transition-transform hover:scale-105">
            <Image 
              src={skill.thumbnailUrl} 
              alt={skill.title}
              width={400} 
              height={225} 
              className="w-full h-40 object-cover"
              data-ai-hint="teamwork collaboration"
            />
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge variant="secondary">{skill.type}</Badge>
                <Badge variant="secondary">{skill.skillTag}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0">
                <a href={skill.url} target="_blank" rel="noopener noreferrer">
                  {skill.type === 'Article' ? 'Read Article' : 'Watch Video'} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
