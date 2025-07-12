'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleIcon, HyredLogoIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

function SplashScreen() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-out animation-delay-3000">
            <HyredLogoIcon className="h-20 w-auto text-primary animated-logo" />
        </div>
    )
}

export default function LoginPage() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowSplash(false);
    }, 3500); // Should be slightly longer than animation
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    // In a real app, this would involve Firebase Auth.
    // For this prototype, we'll just navigate to the dashboard.
    router.push('/dashboard');
  };

  if (showSplash) {
      return <SplashScreen />;
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4 animate-fade-in">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center pt-8">
            <CardTitle className="text-3xl font-bold">Welcome to Student Ascent</CardTitle>
            <CardDescription className="text-muted-foreground">Your career ascent starts here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <p className="text-center text-sm text-muted-foreground">
              Sign in to unlock your potential, track your progress, and discover tools to help you succeed.
            </p>
            <Button
              onClick={handleLogin}
              className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <GoogleIcon className="mr-3 h-6 w-6" />
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}