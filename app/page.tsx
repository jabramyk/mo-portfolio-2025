"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import GitHubShowcase from "@/components/github-showcase"
import Contact from "@/components/contact"
import CommandHub from "@/components/command-hub"
import Footer from "@/components/footer"
import AIChatbotSimple from "@/components/ai-chatbot-simple"
import ScrollProgress from "@/components/scroll-progress"
import FloatingNav from "@/components/floating-nav"
import { InspectModeProvider } from "@/components/inspect-mode-context"
import MiniInspector from "@/components/mini-inspector"
import Inspectable from "@/components/inspectable"
import InspectToggle from "@/components/inspect-toggle"
import TerminalAdventureEnhanced from "@/components/terminal-adventure-enhanced"

export default function Portfolio() {
  return (
    <InspectModeProvider>
      <div className="min-h-screen bg-black text-white font-mono">
        <ScrollProgress />
        <FloatingNav />
        <InspectToggle />

        <Inspectable elementId="commandhub">
          <CommandHub />
        </Inspectable>

        <Inspectable elementId="hero">
          <div id="hero">
            <Hero />
          </div>
        </Inspectable>

        <Inspectable elementId="about">
          <div id="about">
            <About />
          </div>
        </Inspectable>

        <Inspectable elementId="experience">
          <div id="experience">
            <Experience />
          </div>
        </Inspectable>

        <Inspectable elementId="education">
          <div id="education">
            <Education />
          </div>
        </Inspectable>

        <Inspectable elementId="terminal-adventure">
          <div id="projects">
            <TerminalAdventureEnhanced />
          </div>
        </Inspectable>

        <Inspectable elementId="skills">
          <div id="skills">
            <Skills />
          </div>
        </Inspectable>

        <Inspectable elementId="github">
          <div id="github">
            <GitHubShowcase />
          </div>
        </Inspectable>

        <Inspectable elementId="contact">
          <div id="contact">
            <Contact />
          </div>
        </Inspectable>

        <Footer />

        <Inspectable elementId="chatbot">
          <AIChatbotSimple />
        </Inspectable>

        <MiniInspector />
      </div>
    </InspectModeProvider>
  )
}
