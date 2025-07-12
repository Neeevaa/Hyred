import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, GraduationCap, BookHeart } from 'lucide-react';
import { assessments, news, softSkills } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const latestNews = news[0];
  const featuredAssessment = assessments[0];
  const featuredSoftSkill = softSkills[0];

  return (
    <div className="grid gap-6">
      <Card className="overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
        <Link href="/tools">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-xl">Discover AI Tools</CardTitle>
                  <CardDescription>Get personalized tool recommendations.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Answer a few questions about your interests to find the best AI and developer tools to boost your learning and productivity.</p>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
        </Link>
      </Card>

      <section>
        <h2 className="text-2xl font-bold mb-4">Tech Briefs</h2>
        <Card className="overflow-hidden shadow-lg">
          <Image src={latestNews.imageUrl} alt={latestNews.title} width={600} height={300} className="w-full object-cover" data-ai-hint="technology abstract" />
          <CardHeader>
            <CardTitle>{latestNews.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{latestNews.summary}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" className="p-0">
              <a href={latestNews.sourceUrl} target="_blank" rel="noopener noreferrer">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-lg transition-transform hover:scale-[1.02]">
           <Link href="/assessments">
              <CardHeader>
                 <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle>Assessments</CardTitle>
                        <CardDescription>Test your knowledge</CardDescription>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{featuredAssessment.title}</p>
                <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">{featuredAssessment.topic}</Badge>
                    <Badge variant="secondary">{featuredAssessment.level}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    <span>View All</span>
                </Button>
              </CardFooter>
          </Link>
        </Card>

        <Card className="shadow-lg transition-transform hover:scale-[1.02]">
          <Link href="/soft-skills">
            <CardHeader>
               <div className="flex items-center gap-3">
                    <BookHeart className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle>Soft Skills</CardTitle>
                        <CardDescription>Grow your career</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{featuredSoftSkill.title}</p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">{featuredSoftSkill.type}</Badge>
                <Badge variant="secondary">{featuredSoftSkill.skillTag}</Badge>
              </div>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    <span>View All</span>
                </Button>
            </CardFooter>
          </Link>
        </Card>
      </div>
    </div>
  );
}
