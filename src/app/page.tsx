'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleIcon, HyredLogo } from '@/components/icons';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, this would involve Firebase Auth.
    // For this prototype, we'll just navigate to the dashboard.
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-auto items-center justify-center text-primary">
              <HyredLogo className="h-full w-auto" />
            </div>
            <CardTitle className="text-3xl font-bold">Welcome to Hyred</CardTitle>
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
