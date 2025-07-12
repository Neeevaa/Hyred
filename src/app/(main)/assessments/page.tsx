
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileQuestion } from 'lucide-react';
import { Quiz } from '@/components/quiz';
import { quizzes } from '@/lib/quiz-data';
import { Question } from '@/lib/types';
import { assessments } from '@/lib/mock-data';


export default function AssessmentsPage() {
  const [activeQuiz, setActiveQuiz] = useState<{ topic: string; level: string; questions: Question[] } | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = (topic: string, level: string) => {
    const questions = quizzes[topic]?.[level];
    if (questions) {
      setActiveQuiz({ topic, level, questions });
      setShowQuiz(true);
    } else {
      // Handle case where quiz for the topic and level is not found
      console.error(`Quiz not found for topic: ${topic}, level: ${level}`);
    }
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
    setActiveQuiz(null);
  };

  if (showQuiz && activeQuiz) {
    return (
      <Quiz
        questions={activeQuiz.questions}
        level={activeQuiz.level}
        onComplete={handleQuizComplete}
      />
    );
  }

  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold">Assessments</h1>
        <p className="text-muted-foreground">Check your understanding and earn XP.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {assessments.map((assessment) => (
          <Card key={assessment.id} className="shadow-lg flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                    <FileQuestion className="h-6 w-6 text-primary" />
                 </div>
                 <div>
                    <CardTitle>{assessment.title}</CardTitle>
                    <CardDescription>Test your skills in {assessment.topic}.</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge variant="outline">Topic: {assessment.topic}</Badge>
                <Badge variant="outline">Level: {assessment.level}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => handleStartQuiz(assessment.topic, assessment.level)}
              >
                Start Quiz
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
