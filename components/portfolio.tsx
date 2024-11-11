"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export function PortfolioComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-900">
      <Card className="w-full max-w-md bg-black/50 text-white">
        <CardContent className="flex flex-col items-center space-y-6 p-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src="/profile.jpg"
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Florencia Taranto</h1>
            <p className="text-blue-300">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/efetine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-black" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com/in/mflorenciataranto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-black" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://gamevault-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 text-black" />
                <span className="sr-only">GameVault Project</span>
              </a>
            </Button>
          </div>
          <p className="text-center text-sm text-gray-400">
            Welcome to my portfolio. I&apos;m a passionate developer with
            experience in creating innovative web applications. Check out my
            &quot;GameVault&quot; project and feel free to contact me for
            collaborations or opportunities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
