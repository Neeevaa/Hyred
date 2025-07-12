
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutGrid, Code, GraduationCap, BookHeart, BarChart2, LogOut, BrainCircuit, Binary } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import React from 'react';
import { ThemeSwitcher } from '@/components/theme-switcher';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: LayoutGrid },
  { href: '/code-tracks', label: 'Tracks', icon: Code },
  { href: '/dsa', label: 'DSA', icon: Binary },
  { href: '/aptitude', label: 'Aptitude', icon: BrainCircuit },
  { href: '/assessments', label: 'Assess', icon: GraduationCap },
  { href: '/soft-skills', label: 'Skills', icon: BookHeart },
  { href: '/stats', label: 'Stats', icon: BarChart2 },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, this would clear auth state
    router.push('/');
  };

  const getPageTitle = () => {
    const currentNavItem = navItems.find(item => pathname.startsWith(item.href));
    if (pathname.includes('/tools')) return 'AI Tool Suggester';
    return currentNavItem ? currentNavItem.label : 'Hyred';
  }

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card px-4 shadow-sm">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-foreground">{getPageTitle()}</h1>
        </div>
        <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Avatar>
              <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Log out">
              <LogOut className="h-5 w-5" />
            </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 pb-20">{children}</main>

      <nav className="fixed bottom-0 left-0 z-10 w-full border-t bg-card shadow-t">
        <div className="mx-auto grid h-16 max-w-md grid-cols-7 items-center px-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 rounded-lg p-2 text-muted-foreground transition-colors duration-200 ease-in-out hover:bg-primary/10',
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
