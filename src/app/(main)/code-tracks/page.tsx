import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { codingTracks, mockUser } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CodeTracksPage() {
  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold">Code Tracks</h1>
        <p className="text-muted-foreground">Choose your path and start learning.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {codingTracks.map((track) => {
          const userProgress = mockUser.progress[track.id] || { completedModules: [], progress: 0 };
          
          return (
            <Link href="#" key={track.id}>
              <Card className="h-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <track.icon className="h-10 w-10 text-primary" />
                    <div>
                      <CardTitle className="text-2xl">{track.language}</CardTitle>
                      <CardDescription>{track.modules.length} modules</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Progress</span>
                      <span>{userProgress.progress}%</span>
                    </div>
                    <Progress value={userProgress.progress} className="h-3" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-primary">
                    <span>Continue Learning</span>
                    <ArrowRight className="h-4 w-4" />
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
