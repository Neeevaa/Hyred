'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleIcon } from '@/components/icons';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real app, this would involve Firebase Auth.
    // For this prototype, we'll use hardcoded logic.
    if (email === 'admin@gmail.com' && password === 'admin') {
      router.push('/admin/dashboard');
    } else {
      // For any other user, create a profile (mock) and go to user dashboard.
      router.push('/dashboard');
    }
  };
  
  const handleGoogleLogin = () => {
    router.push('/dashboard');
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4 animate-fade-in">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center pt-8 space-y-2">
            <CardTitle className="text-3xl font-bold">Welcome to Hyred</CardTitle>
            <CardDescription className="text-muted-foreground">Your career ascent starts here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
              <Button
                onClick={handleGoogleLogin}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <GoogleIcon className="mr-3 h-6 w-6" />
                Sign in with Google
              </Button>
            <div className="flex items-center space-x-2">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
              <Separator className="flex-1" />
            </div>
            <div className="space-y-4">
               <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        placeholder="m@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
               </div>
               <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
               </div>
                 <Button
                    onClick={handleLogin}
                    className="w-full h-12 text-base font-semibold"
                    >
                    Sign in with Email
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
