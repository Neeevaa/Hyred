
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '@/lib/types';

interface QuizProps {
  questions: Question[];
  level: string;
  onComplete: (score: number) => void;
}

export function Quiz({ questions, level, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
      const score = calculateScore();
      onComplete(score);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return (score / questions.length) * 100;
  };

  if (showScore) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your score: {calculateScore().toFixed(2)}%</p>
          <Button onClick={() => onComplete(calculateScore())}>Finish</Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{`Level: ${level} - Question ${currentQuestionIndex + 1}/${questions.length}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{currentQuestion.question}</p>
        <RadioGroup
          onValueChange={(value) => handleAnswerSelect(currentQuestion.id, value)}
          value={selectedAnswers[currentQuestion.id]}
        >
          {currentQuestion.options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleNextQuestion} className="mt-4">
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
        </Button>
      </CardContent>
    </Card>
  );
}
