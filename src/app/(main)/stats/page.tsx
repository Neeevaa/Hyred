'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { mockUser, codingTracks } from '@/lib/mock-data';
import { Trophy } from 'lucide-react';

const ChartTooltipContent = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                Track
              </span>
              <span className="font-bold text-muted-foreground">
                {label}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                XP
              </span>
              <span className="font-bold text-foreground">
                {payload[0].value}
              </span>
            </div>
          </div>
        </div>
      );
    }
  
    return null;
  };


export default function StatsPage() {
  const totalXpGoal = 5000;
  const progressPercentage = (mockUser.xp / totalXpGoal) * 100;

  const chartData = codingTracks.map(track => {
    const trackProgress = mockUser.progress[track.id];
    let xpFromTrack = 0;
    if (trackProgress) {
        xpFromTrack = track.modules
            .filter(m => trackProgress.completedModules.includes(m.id))
            .reduce((sum, m) => sum + m.xp, 0);
    }
    return {
        name: track.language,
        xp: xpFromTrack,
    }
  });

  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold">Your Progress</h1>
        <p className="text-muted-foreground">A summary of your learning journey.</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
             <Trophy className="h-8 w-8 text-yellow-500" />
             <div>
                <CardTitle className="text-2xl">Total Experience</CardTitle>
                <CardDescription>Your overall XP across all activities.</CardDescription>
             </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center items-baseline gap-2">
            <span className="text-5xl font-bold text-primary">{mockUser.xp}</span>
            <span className="text-lg text-muted-foreground">/ {totalXpGoal} XP</span>
          </div>
          <Progress value={progressPercentage} className="h-4" />
          <p className="text-center text-sm text-muted-foreground">You are {Math.round(progressPercentage)}% of the way to the next level!</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>XP per Code Track</CardTitle>
          <CardDescription>See how your XP is distributed across different languages.</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--muted))'}} />
                <Bar dataKey="xp" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
