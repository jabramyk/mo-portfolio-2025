"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface InspectModeContextType {
  isInspectMode: boolean
  toggleInspectMode: () => void
  selectedElement: string | null
  setSelectedElement: (element: string | null) => void
  elementInfo: Record<string, any>
}

const InspectModeContext = createContext<InspectModeContextType | undefined>(undefined)

export function useInspectMode() {
  const context = useContext(InspectModeContext)
  if (!context) {
    throw new Error("useInspectMode must be used within InspectModeProvider")
  }
  return context
}

const ELEMENT_INFO = {
  hero: {
    title: "Hero Section",
    description: "The main landing section featuring Mohamed's introduction with terminal-inspired design",
    details:
      "Built with Framer Motion for smooth animations, includes typing effect for dynamic text, and features a grid background animation. The design reflects Mohamed's love for terminal aesthetics.",
    tech: ["Framer Motion", "React", "TypeScript", "TailwindCSS"],
    inspiration: "Inspired by terminal interfaces and hacker aesthetics that Mohamed loves",
  },
  "hero-typing": {
    title: "Dynamic Typing Effect",
    description: "Interactive text animation that cycles through Mohamed's roles",
    details:
      "Custom React component that simulates typing and deleting text with realistic timing. Uses state management to cycle through different professional titles, showcasing Mohamed's versatility.",
    tech: ["React Hooks", "setTimeout", "State Management", "CSS Animations"],
    inspiration: "Mimics the experience of typing in a terminal, reflecting Mohamed's developer mindset",
  },
  "hero-traits": {
    title: "Interactive Trait Badges",
    description: "Hoverable badges showcasing Mohamed's core personality traits",
    details:
      "Each badge has hover animations and represents a key aspect of Mohamed's character. The colors and animations are carefully chosen to reflect the terminal aesthetic while being engaging.",
    tech: ["Framer Motion", "Hover Effects", "Color Psychology", "Micro-interactions"],
    inspiration: "Representing Mohamed's journey from challenges to success through visual storytelling",
  },
  about: {
    title: "About Section",
    description: "Personal story and professional photo showcasing Mohamed's journey",
    details:
      "Features Mohamed's professional headshot and tells his inspiring story from Guinea to Norfolk. The layout adapts beautifully across devices with responsive grid system.",
    tech: ["Responsive Grid", "Image Optimization", "Framer Motion"],
    inspiration: "Designed to tell Mohamed's unique story of resilience and growth",
  },
  "about-photo": {
    title: "Professional Photo Card",
    description: "Mohamed's professional headshot with elegant presentation",
    details:
      "Optimized image with responsive sizing, elegant border treatment, and subtle animations. The photo positioning and styling create a professional yet approachable impression.",
    tech: ["Image Optimization", "Responsive Images", "CSS Grid", "Border Styling"],
    inspiration: "Showcasing Mohamed's professional presence while maintaining the terminal aesthetic",
  },
  "about-journey": {
    title: "Journey Story Card",
    description: "Mohamed's inspiring story from Guinea to becoming a developer",
    details:
      "Carefully crafted narrative that highlights resilience and determination. The card design uses subtle backgrounds and typography to make the story engaging and readable.",
    tech: ["Typography", "Card Design", "Responsive Text", "Visual Hierarchy"],
    inspiration: "Telling Mohamed's unique story of overcoming challenges through determination",
  },
  experience: {
    title: "Experience Timeline",
    description: "Professional experience with achievement highlights",
    details:
      "Showcases Mohamed's internship where he won 1st place out of 13 teams. The timeline design emphasizes his key achievement and technical growth.",
    tech: ["Timeline Animation", "Achievement Badges", "Responsive Design"],
    inspiration: "Highlighting Mohamed's competitive spirit and technical excellence",
  },
  "experience-achievement": {
    title: "First Place Achievement Badge",
    description: "Highlighting Mohamed's competition victory",
    details:
      "Special trophy icon and styling to emphasize this significant achievement. The golden color and prominent positioning draw attention to this career milestone.",
    tech: ["Icon Design", "Color Psychology", "Visual Emphasis", "Achievement Display"],
    inspiration: "Celebrating Mohamed's competitive success and technical excellence",
  },
  education: {
    title: "Education Cards",
    description: "Academic journey from community college to university",
    details:
      "Shows Mohamed's educational path with current enrollment status. The cards feature hover animations and status indicators for current vs completed degrees.",
    tech: ["Card Components", "Status Indicators", "Hover Effects"],
    inspiration: "Representing Mohamed's commitment to continuous learning",
  },
  "education-current": {
    title: "Current Education Badge",
    description: "Indicator showing Mohamed's ongoing B.S. degree",
    details:
      "Dynamic badge that highlights current enrollment status with distinctive styling. The green accent color indicates active progress and ongoing commitment to education.",
    tech: ["Status Badges", "Dynamic Styling", "Color Coding", "Visual States"],
    inspiration: "Showing Mohamed's dedication to continuous learning and growth",
  },
  projects: {
    title: "Featured Projects",
    description: "Showcase of Mohamed's three major AI-powered applications",
    details:
      "Each project card details the full stack, features, and impact. These represent Mohamed's expertise in AI integration and full-stack development.",
    tech: ["Project Cards", "Feature Lists", "Tech Stack Badges"],
    inspiration: "Demonstrating Mohamed's ability to build complete, impactful applications",
  },
  "project-edusphere": {
    title: "EduSphere AI Project Card",
    description: "AI-powered educational platform showcasing Mohamed's EdTech expertise",
    details:
      "Comprehensive project card with feature breakdown, tech stack display, and interactive elements. The design emphasizes the AI integration and educational impact.",
    tech: ["Card Design", "Feature Lists", "Tech Badges", "Interactive Elements"],
    inspiration: "Showcasing Mohamed's passion for education technology and AI integration",
  },
  "project-interview": {
    title: "Interview Prep AI Project Card",
    description: "AI-driven interview platform demonstrating Mohamed's career-focused solutions",
    details:
      "Detailed project showcase with voice integration highlights and career development focus. The card design emphasizes the practical value and technical complexity.",
    tech: ["Voice Integration", "AI Feedback Systems", "Career Tools", "User Experience"],
    inspiration: "Reflecting Mohamed's understanding of job market challenges and AI solutions",
  },
  "project-content": {
    title: "AI Content Generator Project Card",
    description: "SaaS content generation platform showing Mohamed's business acumen",
    details:
      "Enterprise-focused project card highlighting analytics, API access, and subscription models. The design emphasizes scalability and business value.",
    tech: ["SaaS Architecture", "Analytics Dashboard", "API Design", "Subscription Models"],
    inspiration: "Demonstrating Mohamed's ability to build scalable, monetizable solutions",
  },
  skills: {
    title: "Technical Skills Grid",
    description: "Categorized technical expertise across different domains",
    details:
      "Organized into Frontend, Backend, AI Tools, and Other categories. Each skill is carefully selected based on Mohamed's actual experience and proficiency.",
    tech: ["Skill Categories", "Interactive Cards", "Progressive Disclosure"],
    inspiration: "Showcasing the breadth of Mohamed's technical knowledge",
  },
  "skills-frontend": {
    title: "Frontend Skills Category",
    description: "Modern frontend technologies and frameworks",
    details:
      "Curated list of frontend technologies that Mohamed actively uses. Each skill represents hands-on experience in building user interfaces and interactive experiences.",
    tech: ["React Ecosystem", "Modern CSS", "Animation Libraries", "Build Tools"],
    inspiration: "Highlighting Mohamed's expertise in creating engaging user experiences",
  },
  "skills-backend": {
    title: "Backend Skills Category",
    description: "Server-side technologies and database management",
    details:
      "Backend technologies that power Mohamed's applications. Focus on modern, scalable solutions including cloud databases and serverless architectures.",
    tech: ["Node.js", "Database Management", "Cloud Services", "API Development"],
    inspiration: "Showcasing Mohamed's full-stack capabilities and system design skills",
  },
  "skills-ai": {
    title: "AI Tools Category",
    description: "Artificial intelligence and machine learning platforms",
    details:
      "Cutting-edge AI tools that Mohamed integrates into his applications. These represent his forward-thinking approach to leveraging AI for practical solutions.",
    tech: ["Large Language Models", "AI APIs", "Machine Learning", "Natural Language Processing"],
    inspiration: "Demonstrating Mohamed's expertise in the rapidly evolving AI landscape",
  },
  github: {
    title: "GitHub Repository Showcase",
    description: "Featured repositories with stats and descriptions",
    details:
      "Displays Mohamed's most important repositories with star counts, languages, and descriptions. Ready for GitHub API integration to show real-time data.",
    tech: ["GitHub API Ready", "Repository Cards", "Language Indicators"],
    inspiration: "Highlighting Mohamed's open-source contributions and coding activity",
  },
  "github-repo": {
    title: "Repository Card",
    description: "Individual project repository with stats and details",
    details:
      "Each repository card shows key metrics like stars, forks, and primary language. The design makes it easy to assess project popularity and technical focus.",
    tech: ["GitHub API", "Metrics Display", "Language Detection", "Social Proof"],
    inspiration: "Showcasing Mohamed's coding activity and community engagement",
  },
  contact: {
    title: "Contact Form & Information",
    description: "Professional contact methods and interactive form",
    details:
      "Features multiple contact methods with hover animations and a responsive contact form. All links are functional and lead to Mohamed's real profiles.",
    tech: ["Form Validation", "Contact Links", "Responsive Layout"],
    inspiration: "Making it easy for potential employers and collaborators to reach Mohamed",
  },
  "contact-form": {
    title: "Interactive Contact Form",
    description: "Professional contact form with validation and animations",
    details:
      "Fully functional contact form with field validation, focus animations, and responsive design. The form provides multiple ways for visitors to reach out.",
    tech: ["Form Validation", "Input Animations", "Responsive Forms", "User Experience"],
    inspiration: "Creating an accessible and professional way for opportunities to reach Mohamed",
  },
  "contact-links": {
    title: "Professional Contact Links",
    description: "Direct links to Mohamed's professional profiles",
    details:
      "Curated list of professional contact methods with hover effects and proper accessibility. Each link opens to Mohamed's actual professional profiles.",
    tech: ["Link Styling", "Hover Effects", "Accessibility", "Professional Branding"],
    inspiration: "Providing multiple touchpoints for professional networking and opportunities",
  },
  commandhub: {
    title: "Command Hub",
    description: "Circular navigation menu inspired by terminal commands",
    details:
      "A unique navigation system that expands in a circle, providing quick access to key sections and actions like resume download and GitHub profile.",
    tech: ["Circular Animation", "Command Pattern", "Framer Motion"],
    inspiration: "Combining Mohamed's love for terminal interfaces with modern UX",
  },
  "commandhub-button": {
    title: "Command Hub Button",
    description: "Individual action button within the command hub",
    details:
      "Each button represents a key action or navigation target. The circular arrangement and smooth animations create an intuitive and engaging interaction pattern.",
    tech: ["Button Design", "Circular Layout", "Icon Integration", "Micro-interactions"],
    inspiration: "Making navigation feel like executing terminal commands",
  },
  chatbot: {
    title: "AI Assistant Chatbot",
    description: "Gemini-powered AI trained on Mohamed's complete profile",
    details:
      "An intelligent chatbot that can answer questions about Mohamed's background, experience, projects, and skills. It responds as if it's Mohamed but clarifies it's an AI assistant.",
    tech: ["Gemini AI", "Streaming Responses", "Context Awareness"],
    inspiration: "Showcasing Mohamed's AI expertise while providing an interactive way to learn about him",
  },
  "chatbot-message": {
    title: "Chat Message Bubble",
    description: "Individual message in the chat interface",
    details:
      "Styled message bubbles with different appearances for user and AI messages. The design includes proper spacing, readability, and visual hierarchy.",
    tech: ["Message Styling", "Chat UI", "Typography", "Visual Hierarchy"],
    inspiration: "Creating a natural conversation experience that reflects Mohamed's communication style",
  },
  "terminal-adventure": {
    title: "Interactive Terminal Adventure Game",
    description: "Unique gamified storytelling experience that engages users while showcasing Mohamed's journey",
    details:
      "Built with React state management, TypeScript interfaces, and Framer Motion animations. Features branching narratives, character progression, inventory system, and multiple endings based on user choices. Demonstrates creative problem-solving and user engagement strategies.",
    tech: [
      "React State Management",
      "TypeScript Interfaces",
      "Framer Motion",
      "Interactive Storytelling",
      "Game Logic",
    ],
    inspiration:
      "Replacing repetitive project showcases with an engaging, memorable experience that makes users want to hire Mohamed. Combines terminal aesthetics with RPG-style progression to create emotional connection.",
  },
}

export function InspectModeProvider({ children }: { children: ReactNode }) {
  const [isInspectMode, setIsInspectMode] = useState(false)
  const [selectedElement, setSelectedElement] = useState<string | null>(null)

  const toggleInspectMode = () => {
    setIsInspectMode(!isInspectMode)
    setSelectedElement(null)
  }

  return (
    <InspectModeContext.Provider
      value={{
        isInspectMode,
        toggleInspectMode,
        selectedElement,
        setSelectedElement,
        elementInfo: ELEMENT_INFO,
      }}
    >
      {children}
    </InspectModeContext.Provider>
  )
}
