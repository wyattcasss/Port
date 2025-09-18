/* eslint-disable react/no-unescaped-entities */
"use client" 
import React from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '../components/ui/card';
import Image from 'next/image';
import { Monitor, Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '../components/ui/dropdown-menu';


export default function Home() {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // File in public directory
   
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [theme, setTheme] = React.useState<'system' | 'light' | 'dark'>('system');

  React.useEffect(() => {
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = (value: string) => {
    if (value === 'system' || value === 'light' || value === 'dark') {
      setTheme(value);
    }
  };

  return (
    <main className="min-h-screen font-sans bg-background text-foreground">
      {/* THEME TOGGLE BUTTON */}
      <div className="fixed top-6 right-6 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="rounded-full px-4 py-2 bg-card text-card-foreground shadow border border-border">
              {theme === 'system' ? <Monitor className="inline-block mr-2" /> : theme === 'dark' ? <Moon className="inline-block mr-2" /> : <Sun className="inline-block mr-2" />}
              {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={theme} onValueChange={handleThemeChange}>
              <DropdownMenuRadioItem value="system"><Monitor className="inline-block mr-2" />System</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="light"><Sun className="inline-block mr-2" />Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark"><Moon className="inline-block mr-2" />Dark</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center pt-16 pb-8">
        <h1 className="text-5xl font-bold mb-2 text-center">Hey, I'm Wyatt Cassiotis <span className="wave">👋🏼</span></h1>
        <p className="text-xl mb-2 text-center">📍 Toronto, Canada</p>
        <p className="max-w-2xl text-center ">
          I'm an ambitious full-stack and front-end developer passionate about building dynamic, user-focused web applications using modern technologies like React, TypeScript, and Node.js. I combine strong architectural thinking in cloud solutions (AWS, Serverless) with a keen eye for responsive design and scalable data systems to deliver robust, full-cycle software solutions. With a foundation in agile practices, testing, and even machine learning, I'm driven to continuously expand my impact across both frontend innovation and full-stack engineering.
        </p>
    <div className="flex gap-3 mb-8 mt-8">
          <Button variant="default" asChild>
            <a href="https://github.com/wyattcasss" target="_blank" rel="noopener">GitHub</a>
          </Button>
          <Button variant="default" asChild>
            <a href="https://www.linkedin.com/in/wyatt-cassiotis-ba1b3b376/" target="_blank" rel="noopener">LinkedIn</a>
          </Button>
          <Button variant="default"  asChild>
            <a href="mailto:wyatt.cassiotis@gmail.com" target="_blank" rel="noopener">Email</a>
          </Button>
          <Button variant="default" onClick={downloadFile} asChild >
            <a target="_blank" rel="noopener" >Resume</a>
          </Button>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Image src="/Western_Logo_S_CMYK.png" alt="Western" width={80} height={80} />
              <div>
                <CardTitle>Honours Computer Science with a minor in Software Engineering</CardTitle>
                <span className="font-medium text-primary" >Western University</span>
                <CardDescription>2023-2027</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
<Image src="/meta.webp" alt="Western" width={80} height={80} />              <div>
                <CardTitle>Meta React Specialization</CardTitle>
                <span className="font-medium text-primary" >Meta</span>
                <CardDescription>2025</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Image src="/Amazon-Web-Services-AWS-Logo.png" alt="AWS" width={80} height={80} />
              <div>
                <CardTitle>AWS Cloud Solutions Architect Specialization</CardTitle>
                <span className="font-medium text-primary" >Amazon Web Services</span>
                <CardDescription>2025</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Google Docs Clone Card */}
          <Card className="flex flex-col h-[500px] bg-card text-card-foreground contain-content overflow-hidden p-0">
            <div className="relative w-full h-[200px] flex-shrink-0">
              <Image src="/Docs.png" alt="Google Docs Clone" width={500} height={200} style={{objectFit: 'cover', width: '100%', height: '100%', display: 'block'}} />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <div className="text-center mb-1">
                <CardTitle className="mb-0 h-12 flex items-center justify-center">Google Docs Clone</CardTitle>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <CardDescription className="text-center h-20 flex items-center">Built a full-stack collaborative document editor with Next.js, integrating Liveblocks for real-time collaboration and Convex for serverless backend, delivering rich text editing with live cursors, comments, and multi-user document management.Retry</CardDescription>
              </div>
              <div className="flex gap-2 justify-center mt-4 flex-shrink-0">
                <Button variant="default" size="sm" asChild>
                  <a href="https://github.com/wyattcasss/GoogleDocs" target="_blank" rel="noopener">Code</a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a href="https://docs-sigma-five.vercel.app/" target="_blank" rel="noopener">Live</a>
                </Button>
              </div>
            </div>
          </Card>
          
          {/* AI Interview Prep Card */}
          <Card className="flex flex-col h-[500px] bg-card text-card-foreground contain-content overflow-hidden p-0">
            <div className="relative w-full h-[200px] flex-shrink-0">
              <Image src="/preppy.png" alt="AI Interview Prep" width={500} height={200} style={{objectFit: 'cover', width: '100%', height: '100%', display: 'block'}} />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <div className="text-center mb-1">
                <CardTitle className="mb-0 h-12 flex items-center justify-center">AI Interview Prep</CardTitle>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <CardDescription className="text-center h-20 flex items-center">Built a full-stack interview preparation platform with Next.js, integrating Hume AI for voice-powered mock interviews and PostgreSQL with Drizzle ORM to deliver personalized practice sessions and real-time feedback generation.</CardDescription>
              </div>
              <div className="flex gap-2 justify-center mt-4 flex-shrink-0">
                <Button variant="default" size="sm" asChild>
                  <a href="https://github.com/wyattcasss/Aiprep" target="_blank" rel="noopener">Code</a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a href="https://youtu.be/XxJ3IdeAFRA" target="_blank" rel="noopener">Live</a>
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Valorant Match Predictor Card */}
          <Card className="flex flex-col h-[500px] bg-card text-card-foreground contain-content overflow-hidden p-0">
            <div className="relative w-full h-[200px] flex-shrink-0">
              <Image src="/valml.png" alt="Valorant Match Predictor" width={500} height={200} style={{objectFit: 'cover', width: '100%', height: '100%', display: 'block'}} />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <div className="text-center mb-1">
                <CardTitle className="mb-0 h-12 flex items-center justify-center">Valorant Match Predictor</CardTitle>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <CardDescription className="text-center h-20 flex items-center">Built a RandomForest model with data preprocessing and Streamlit interface for match predictions, using scikit-learn algorithms to process game statistics and generate automated win/loss classifications with confidence scoring.</CardDescription>
              </div>
              <div className="flex gap-2 justify-center mt-4 flex-shrink-0">
                <Button variant="default" size="sm" asChild>
                  <a href="https://github.com/wyattcasss/ValorantML" target="_blank" rel="noopener">Code</a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a href="https://valorantpredict.streamlit.app/" target="_blank" rel="noopener">Live</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* KNOWN TECH SECTION */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Known Tech</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Node.js</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>Next.js</Badge>
          <Badge>AWS</Badge>
          <Badge>Serverless</Badge>
          <Badge>Python</Badge>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Wyatt Cassiotis. All rights reserved.
      </footer>
    </main>
  

  );
  

}