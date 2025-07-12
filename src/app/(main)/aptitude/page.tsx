
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { aptitudeCategories } from '@/lib/mock-data';
import { Quiz } from '@/components/quiz';
import { Question } from '@/lib/types';

export default function AptitudePage() {
    const [activeQuiz, setActiveQuiz] = useState<{ title: string; questions: Question[] } | null>(null);

    const handleStartQuiz = (title: string, questions: Question[]) => {
        setActiveQuiz({ title, questions });
    };

    const handleQuizComplete = () => {
        setActiveQuiz(null);
    };

    if (activeQuiz) {
        return (
            <Quiz
                questions={activeQuiz.questions}
                level={activeQuiz.title} // Using category title as level for Quiz component
                onComplete={handleQuizComplete}
            />
        );
    }

    return (
        <div className="grid gap-6">
            <header>
                <h1 className="text-3xl font-bold">Aptitude</h1>
                <p className="text-muted-foreground">Sharpen your problem-solving skills.</p>
            </header>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {aptitudeCategories.map((category) => (
                    <Card key={category.id} className="shadow-lg flex flex-col justify-between">
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <category.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>{category.title}</CardTitle>
                                    <CardDescription>{category.questions.length} questions</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Test your skills in {category.title.toLowerCase()}.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={() => handleStartQuiz(category.title, category.questions)}
                            >
                                Start Practice
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
