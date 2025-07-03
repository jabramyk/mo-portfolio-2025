"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, RotateCcw } from "lucide-react"
import Inspectable from "./inspectable"

interface GameState {
  currentScene: string
  inventory: string[]
  stats: {
    creativity: number
    technical: number
    resilience: number
    leadership: number
  }
  visitedScenes: string[]
  gameComplete: boolean
}

interface Scene {
  id: string
  title: string
  description: string
  choices: Choice[]
  autoAdvance?: boolean
  delay?: number
  isEnding?: boolean
}

interface Choice {
  text: string
  nextScene: string
  statBoost?: { [key: string]: number }
  addToInventory?: string
  requirement?: { stat: string; min: number }
}

const INITIAL_STATE: GameState = {
  currentScene: "start",
  inventory: [],
  stats: {
    creativity: 0,
    technical: 0,
    resilience: 0,
    leadership: 0,
  },
  visitedScenes: [],
  gameComplete: false,
}

const SCENES: Scene[] = [
  {
    id: "start",
    title: "Mohamed's Journey Begins",
    description: `
> Initializing career_simulator.exe...
> Loading Mohamed_Datt_profile.json...
> Status: READY

Welcome to Mohamed's Interactive Career Journey!

You're about to experience the path from Guinea to becoming a Full Stack Developer in Norfolk, Virginia. Your choices will shape the story and reveal Mohamed's skills.

Ready to begin the adventure?`,
    choices: [
      {
        text: "🚀 Start the journey",
        nextScene: "guinea",
      },
      {
        text: "📊 View character stats first",
        nextScene: "stats",
      },
    ],
  },
  {
    id: "stats",
    title: "Character Profile",
    description: `
> cat mohamed_stats.txt

MOHAMED DATT - CHARACTER PROFILE
================================
Height: 6'2"
Location: Norfolk, Virginia
Origin: Guinea → NYC → Norfolk
Superpower: Learning English in 3 months via cartoons

CURRENT STATS:
- Creativity: [████████░░] 80%
- Technical Skills: [█████████░] 90%
- Resilience: [██████████] 100%
- Leadership: [███████░░░] 70%

Special Abilities:
- Rapid Language Acquisition
- AI Integration Mastery
- Terminal Aesthetic Appreciation
- Cartoon-Powered Learning`,
    choices: [
      {
        text: "🚀 Begin the adventure",
        nextScene: "guinea",
      },
    ],
  },
  {
    id: "guinea",
    title: "Chapter 1: The Beginning",
    description: `
> cd /life/guinea
> ls -la childhood/

Born in Guinea, young Mohamed faces his first major challenge: moving to NYC and learning English. The bullying is tough, but there's a secret weapon...

Dora the Explorer is on TV. "Hola! Can you say 'Hola'?"

How should Mohamed approach this challenge?`,
    choices: [
      {
        text: "📺 Embrace cartoons as learning tools",
        nextScene: "cartoon_learning",
        statBoost: { creativity: 2, resilience: 1 },
        addToInventory: "Cartoon Learning Method",
      },
      {
        text: "📚 Focus on traditional studying",
        nextScene: "traditional_study",
        statBoost: { technical: 1 },
      },
      {
        text: "🤝 Try to make friends immediately",
        nextScene: "social_approach",
        statBoost: { leadership: 1 },
      },
    ],
  },
  {
    id: "cartoon_learning",
    title: "The Cartoon Breakthrough",
    description: `
> ./learn_english.sh --method=cartoons --speed=3months

SUCCESS! In just 3 months, Mohamed masters English through cartoons. Dora, Diego, and friends become unlikely teachers. The bullies are amazed.

"Wait, how did you learn so fast?"

This unconventional approach reveals something important about Mohamed's learning style...`,
    choices: [
      {
        text: "💡 'I find creative solutions to problems'",
        nextScene: "college_prep",
        statBoost: { creativity: 2, technical: 1 },
      },
      {
        text: "🎯 'I adapt quickly to new environments'",
        nextScene: "college_prep",
        statBoost: { resilience: 2, leadership: 1 },
      },
    ],
  },
  {
    id: "traditional_study",
    title: "The Hard Way",
    description: `
> studying_progress.log: 15% complete...

Traditional methods work, but slowly. Mohamed struggles with conventional approaches. Maybe there's a better way?

A cartoon plays in the background...`,
    choices: [
      {
        text: "📺 Switch to cartoon learning",
        nextScene: "cartoon_learning",
        statBoost: { creativity: 1, resilience: 1 },
        addToInventory: "Cartoon Learning Method",
      },
      {
        text: "💪 Push through with determination",
        nextScene: "college_prep",
        statBoost: { resilience: 3 },
      },
    ],
  },
  {
    id: "social_approach",
    title: "Building Connections",
    description: `
> networking.exe --target=classmates

Mohamed tries to connect with others first. Some are welcoming, others not so much. But the language barrier is still there.

A friend points to the TV: "Hey, want to watch cartoons together?"`,
    choices: [
      {
        text: "📺 Learn together through cartoons",
        nextScene: "cartoon_learning",
        statBoost: { creativity: 1, leadership: 1 },
        addToInventory: "Cartoon Learning Method",
      },
      {
        text: "🎯 Focus on language first, friends later",
        nextScene: "college_prep",
        statBoost: { technical: 1, resilience: 1 },
      },
    ],
  },
  {
    id: "college_prep",
    title: "Chapter 2: The Academic Path",
    description: `
> cd /education/tidewater_community_college
> git init computer_science_journey

Now in Norfolk, Virginia, Mohamed starts his Computer Science journey at Tidewater Community College. The terminal becomes his new best friend.

First programming assignment: "Hello, World!"

How should Mohamed approach his CS education?`,
    choices: [
      {
        text: "🔥 Dive deep into every technology",
        nextScene: "tech_deep_dive",
        statBoost: { technical: 3 },
      },
      {
        text: "🎨 Focus on creative applications",
        nextScene: "creative_coding",
        statBoost: { creativity: 2, technical: 1 },
      },
      {
        text: "👥 Build study groups and collaborate",
        nextScene: "collaborative_learning",
        statBoost: { leadership: 2, technical: 1 },
      },
    ],
  },
  {
    id: "tech_deep_dive",
    title: "The Technical Mastery Path",
    description: `
> npm install everything
> learning_mode: INTENSIVE

Mohamed becomes a sponge for technology. React, Node.js, databases, AI tools - everything is fascinating. Late nights in the computer lab become routine.

Professor: "Mohamed, you've completed next semester's assignments already?"`,
    choices: [
      {
        text: "🚀 'I want to build something amazing'",
        nextScene: "internship_prep",
        statBoost: { technical: 2, creativity: 1 },
        addToInventory: "Advanced Technical Skills",
      },
      {
        text: "🎯 'I'm preparing for real-world challenges'",
        nextScene: "internship_prep",
        statBoost: { technical: 1, resilience: 1, leadership: 1 },
      },
    ],
  },
  {
    id: "creative_coding",
    title: "The Creative Technologist",
    description: `
> git checkout creative-branch
> ./build_something_beautiful.sh

Mohamed discovers the intersection of art and code. Terminal aesthetics, smooth animations, AI-powered creativity - this is where magic happens.

First project: A terminal-inspired portfolio that makes people say "Wow!"`,
    choices: [
      {
        text: "🎨 'Code is my canvas'",
        nextScene: "internship_prep",
        statBoost: { creativity: 3, technical: 1 },
        addToInventory: "Creative Vision",
      },
      {
        text: "⚡ 'I want to solve real problems beautifully'",
        nextScene: "internship_prep",
        statBoost: { creativity: 2, technical: 2 },
      },
    ],
  },
  {
    id: "collaborative_learning",
    title: "The Team Builder",
    description: `
> ./start_study_group.sh --members=classmates
> collaboration_level: MAXIMUM

Mohamed organizes study sessions, helps struggling classmates, and builds a network of future developers. Leadership skills emerge naturally.

Classmate: "Mohamed, you should run for student government!"`,
    choices: [
      {
        text: "👑 'I prefer leading through example'",
        nextScene: "internship_prep",
        statBoost: { leadership: 3, resilience: 1 },
        addToInventory: "Natural Leadership",
      },
      {
        text: "🤝 'I want to lift others as I climb'",
        nextScene: "internship_prep",
        statBoost: { leadership: 2, creativity: 1, resilience: 1 },
      },
    ],
  },
  {
    id: "internship_prep",
    title: "Chapter 3: The Big Break",
    description: `
> cd /career/internship_opportunity
> status: NERVOUS_BUT_READY

Product Manager Accelerator internship opportunity appears. 13 teams competing for the best final app. Mohamed's heart races.

"This is it. Time to show what I've learned."

What's Mohamed's strategy for the internship?`,
    choices: [
      {
        text: "🏆 'I'm going for first place'",
        nextScene: "competitive_approach",
        statBoost: { technical: 1, leadership: 1 },
      },
      {
        text: "🤝 'I want to learn from everyone'",
        nextScene: "learning_approach",
        statBoost: { resilience: 1, creativity: 1 },
      },
      {
        text: "💡 'I'll build something innovative'",
        nextScene: "innovation_approach",
        statBoost: { creativity: 2 },
        requirement: { stat: "creativity", min: 3 },
      },
    ],
  },
  {
    id: "competitive_approach",
    title: "The Competitor",
    description: `
> competition_mode: ACTIVATED
> target: FIRST_PLACE

Mohamed studies the competition, analyzes winning strategies, and pushes himself harder than ever. TypeScript, Supabase, Gemini AI - the stack comes together beautifully.

Team member: "Mohamed, your code is incredible!"`,
    choices: [
      {
        text: "🚀 Push even harder",
        nextScene: "victory",
        statBoost: { technical: 2, resilience: 1 },
      },
      {
        text: "🤝 Help teammates improve too",
        nextScene: "victory",
        statBoost: { leadership: 2, technical: 1 },
      },
    ],
  },
  {
    id: "learning_approach",
    title: "The Student",
    description: `
> learning_mode: MAXIMUM_ABSORPTION
> mindset: GROWTH_ORIENTED

Mohamed approaches the internship as a learning opportunity. Every challenge is a chance to grow, every teammate a potential teacher.

Mentor: "Your attitude is refreshing, Mohamed."`,
    choices: [
      {
        text: "📚 'Every failure is a lesson'",
        nextScene: "victory",
        statBoost: { resilience: 2, technical: 1 },
      },
      {
        text: "🌟 'I want to exceed expectations'",
        nextScene: "victory",
        statBoost: { creativity: 1, technical: 1, leadership: 1 },
      },
    ],
  },
  {
    id: "innovation_approach",
    title: "The Innovator",
    description: `
> ./think_outside_the_box.sh
> innovation_level: MAXIMUM

Mohamed doesn't just want to win - he wants to create something that changes the game. AI integration, beautiful UX, terminal aesthetics - everything comes together in a unique vision.

Judge: "I've never seen anything like this before..."`,
    choices: [
      {
        text: "🎨 'This is just the beginning'",
        nextScene: "victory",
        statBoost: { creativity: 3, technical: 1 },
      },
    ],
  },
  {
    id: "victory",
    title: "Chapter 4: The Victory",
    description: `
> competition_results.txt
> WINNER: MOHAMED_DATT
> RANK: 1st out of 13 teams
> STATUS: LEGENDARY

"And the winner is... Mohamed Datt!"

The room erupts. Months of hard work, creativity, and resilience pay off. But this isn't the end - it's just the beginning.

What does this victory represent?`,
    choices: [
      {
        text: "🏆 'Proof that hard work pays off'",
        nextScene: "current_day",
        statBoost: { resilience: 2 },
      },
      {
        text: "🚀 'A launchpad for bigger dreams'",
        nextScene: "current_day",
        statBoost: { creativity: 1, leadership: 1 },
      },
      {
        text: "🌟 'Validation of my unique approach'",
        nextScene: "current_day",
        statBoost: { creativity: 1, technical: 1 },
      },
    ],
  },
  {
    id: "current_day",
    title: "Chapter 5: The Present",
    description: `
> pwd
> /home/mohamed/norfolk_virginia/2025
> status: FULL_STACK_DEVELOPER

Today, Mohamed continues his journey at Old Dominion University while building amazing projects:

• EduSphere AI - Helping students succeed
• Interview Prep AI - Empowering job seekers  
• AI Content Generator - Scaling creativity
• This very portfolio - Showcasing the journey

The boy who learned English from cartoons is now building the future with AI.

What's next in Mohamed's story?`,
    choices: [
      {
        text: "💼 'Ready for the next challenge'",
        nextScene: "ending_hire",
        requirement: { stat: "technical", min: 5 },
      },
      {
        text: "🤝 'Looking for amazing teammates'",
        nextScene: "ending_collaborate",
        requirement: { stat: "leadership", min: 4 },
      },
      {
        text: "🚀 'Building something revolutionary'",
        nextScene: "ending_innovate",
        requirement: { stat: "creativity", min: 6 },
      },
      {
        text: "📧 'Let's connect and chat'",
        nextScene: "ending_connect",
      },
    ],
  },
  {
    id: "ending_hire",
    title: "🎯 The Perfect Hire",
    description: `
> employee_evaluation.exe
> RESULT: EXCEPTIONAL_CANDIDATE

You've discovered what makes Mohamed special:
✅ Proven winner (1st place out of 13 teams)
✅ Creative problem solver (English via cartoons)
✅ Technical excellence (Full-stack + AI)
✅ Resilient mindset (Guinea → Norfolk success story)
✅ Leadership potential (Natural team builder)

Mohamed is ready to bring this same energy, creativity, and technical excellence to your team.

Ready to make the best hiring decision of the year?`,
    choices: [
      {
        text: "📧 Contact Mohamed now",
        nextScene: "contact_form",
      },
      {
        text: "🔄 Play again to explore other paths",
        nextScene: "restart",
      },
    ],
    isEnding: true,
  },
  {
    id: "ending_collaborate",
    title: "🤝 The Ideal Collaborator",
    description: `
> collaboration_assessment.exe
> RESULT: DREAM_TEAMMATE

Your choices reveal Mohamed's collaborative superpowers:
✅ Natural mentor and team builder
✅ Lifts others while climbing
✅ Combines technical skills with emotional intelligence
✅ Proven track record of team success
✅ Brings unique perspectives and creative solutions

Mohamed doesn't just join teams - he elevates them.

Ready to build something amazing together?`,
    choices: [
      {
        text: "🚀 Start a conversation",
        nextScene: "contact_form",
      },
      {
        text: "🔄 Explore other story paths",
        nextScene: "restart",
      },
    ],
    isEnding: true,
  },
  {
    id: "ending_innovate",
    title: "💡 The Innovation Catalyst",
    description: `
> innovation_potential.exe
> RESULT: GAME_CHANGER

You've unlocked Mohamed's innovation profile:
✅ Thinks outside conventional boundaries
✅ Combines AI with creative vision
✅ Builds experiences that make people say "Wow!"
✅ Terminal aesthetics meet modern UX
✅ Turns constraints into creative opportunities

Mohamed doesn't just build apps - he crafts experiences that users remember.

Ready to revolutionize your next project?`,
    choices: [
      {
        text: "⚡ Let's innovate together",
        nextScene: "contact_form",
      },
      {
        text: "🎮 Play again for different insights",
        nextScene: "restart",
      },
    ],
    isEnding: true,
  },
  {
    id: "ending_connect",
    title: "🌟 The Connection",
    description: `
> networking.exe --mode=genuine
> STATUS: CONNECTION_ESTABLISHED

Sometimes the best opportunities start with a simple conversation. Mohamed's journey from Guinea to Norfolk shows that meaningful connections can change everything.

Whether you're looking to:
• Hire an exceptional developer
• Collaborate on innovative projects  
• Share ideas about AI and web development
• Just say hello and connect

Mohamed is always excited to meet new people and explore possibilities.

What kind of conversation would you like to have?`,
    choices: [
      {
        text: "💼 Business opportunity",
        nextScene: "contact_form",
      },
      {
        text: "🤝 Collaboration idea",
        nextScene: "contact_form",
      },
      {
        text: "☕ Casual chat",
        nextScene: "contact_form",
      },
    ],
    isEnding: true,
  },
  {
    id: "contact_form",
    title: "🚀 Ready to Connect?",
    description: `
> contact_mohamed.sh --priority=high

Great choice! Mohamed is excited to hear from you. 

Based on your journey through his story, you've seen his:
• Technical excellence and AI expertise
• Creative problem-solving approach
• Resilience and adaptability
• Leadership and collaboration skills

Now it's time to start your own collaboration story together.

Choose your preferred way to connect:`,
    choices: [
      {
        text: "📧 Send an email",
        nextScene: "email_contact",
      },
      {
        text: "💼 View LinkedIn profile",
        nextScene: "linkedin_contact",
      },
      {
        text: "🐙 Check out GitHub",
        nextScene: "github_contact",
      },
      {
        text: "📝 Use contact form",
        nextScene: "form_contact",
      },
    ],
    isEnding: true,
  },
]

export default function TerminalAdventure() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showChoices, setShowChoices] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const currentScene = SCENES.find((scene) => scene.id === gameState.currentScene)

  // Typing effect for scene descriptions
  useEffect(() => {
    if (!currentScene) return

    setIsTyping(true)
    setShowChoices(false)
    setDisplayText("")

    const text = currentScene.description
    let index = 0

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        setShowChoices(true)
        clearInterval(typeInterval)
      }
    }, 20)

    return () => clearInterval(typeInterval)
  }, [currentScene])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayText, showChoices])

  const handleChoice = (choice: Choice) => {
    // Check requirements
    if (choice.requirement) {
      const { stat, min } = choice.requirement
      if (gameState.stats[stat as keyof typeof gameState.stats] < min) {
        return // Choice not available
      }
    }

    setGameState((prev) => {
      const newState = { ...prev }

      // Update stats
      if (choice.statBoost) {
        Object.entries(choice.statBoost).forEach(([stat, boost]) => {
          newState.stats[stat as keyof typeof newState.stats] += boost
        })
      }

      // Add to inventory
      if (choice.addToInventory) {
        newState.inventory.push(choice.addToInventory)
      }

      // Update visited scenes
      if (!newState.visitedScenes.includes(prev.currentScene)) {
        newState.visitedScenes.push(prev.currentScene)
      }

      // Move to next scene
      newState.currentScene = choice.nextScene

      // Check if game is complete
      if (choice.nextScene.startsWith("ending_") || choice.nextScene === "contact_form") {
        newState.gameComplete = true
      }

      return newState
    })
  }

  const handleSpecialAction = (action: string) => {
    switch (action) {
      case "email_contact":
        window.open("mailto:d.mohamed1504@gmail.com?subject=Let's Connect - From Terminal Adventure", "_blank")
        break
      case "linkedin_contact":
        window.open("https://linkedin.com/in/mohamed-datt", "_blank")
        break
      case "github_contact":
        window.open("https://github.com/MeeksonJr", "_blank")
        break
      case "form_contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        break
      case "restart":
        setGameState(INITIAL_STATE)
        break
    }
  }

  const resetGame = () => {
    setGameState(INITIAL_STATE)
  }

  const getStatBar = (value: number, max = 10) => {
    const filled = Math.min(value, max)
    const empty = max - filled
    return "█".repeat(filled) + "░".repeat(empty)
  }

  const isChoiceAvailable = (choice: Choice) => {
    if (!choice.requirement) return true
    const { stat, min } = choice.requirement
    return gameState.stats[stat as keyof typeof gameState.stats] >= min
  }

  if (!currentScene) return null

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-green-400 text-sm mb-4">$ ./mohamed_adventure.exe</div>
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="text-green-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">Interactive Career Journey</h2>
          </div>

          <Inspectable elementId="terminal-adventure">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Stats Panel */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 sticky top-4">
                  <h3 className="text-green-400 font-semibold mb-4">Character Stats</h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Creativity</span>
                        <span>{gameState.stats.creativity}</span>
                      </div>
                      <div className="font-mono text-xs text-green-400">{getStatBar(gameState.stats.creativity)}</div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Technical</span>
                        <span>{gameState.stats.technical}</span>
                      </div>
                      <div className="font-mono text-xs text-blue-400">{getStatBar(gameState.stats.technical)}</div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Resilience</span>
                        <span>{gameState.stats.resilience}</span>
                      </div>
                      <div className="font-mono text-xs text-yellow-400">{getStatBar(gameState.stats.resilience)}</div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Leadership</span>
                        <span>{gameState.stats.leadership}</span>
                      </div>
                      <div className="font-mono text-xs text-purple-400">{getStatBar(gameState.stats.leadership)}</div>
                    </div>
                  </div>

                  {gameState.inventory.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-green-400 font-semibold mb-2">Inventory</h4>
                      <div className="space-y-1 text-xs">
                        {gameState.inventory.map((item, index) => (
                          <div key={index} className="text-gray-300">
                            • {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <button
                      onClick={resetGame}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <RotateCcw size={14} />
                      Restart Game
                    </button>
                  </div>
                </div>
              </div>

              {/* Game Terminal */}
              <div className="lg:col-span-3">
                <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
                  {/* Terminal Header */}
                  <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm ml-2">mohamed_adventure.exe</span>
                  </div>

                  {/* Terminal Content */}
                  <div ref={terminalRef} className="p-6 h-96 overflow-y-auto font-mono text-sm leading-relaxed">
                    <div className="text-green-400 mb-4">{currentScene.title}</div>

                    <div className="text-gray-300 whitespace-pre-line mb-6">{displayText}</div>

                    {isTyping && <span className="text-green-400 animate-pulse">█</span>}

                    <AnimatePresence>
                      {showChoices && (
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {currentScene.choices.map((choice, index) => {
                            const available = isChoiceAvailable(choice)
                            const isSpecialAction = [
                              "email_contact",
                              "linkedin_contact",
                              "github_contact",
                              "form_contact",
                              "restart",
                            ].includes(choice.nextScene)

                            return (
                              <motion.button
                                key={index}
                                className={`block w-full text-left p-3 rounded border transition-colors ${
                                  available
                                    ? "border-gray-600 hover:border-green-400 hover:bg-gray-900/50 text-gray-300 hover:text-white"
                                    : "border-gray-800 text-gray-600 cursor-not-allowed"
                                }`}
                                onClick={() => {
                                  if (available) {
                                    if (isSpecialAction) {
                                      handleSpecialAction(choice.nextScene)
                                    } else {
                                      handleChoice(choice)
                                    }
                                  }
                                }}
                                disabled={!available}
                                whileHover={available ? { scale: 1.02 } : {}}
                                whileTap={available ? { scale: 0.98 } : {}}
                              >
                                <span className="text-green-400">{">"} </span>
                                {choice.text}
                                {!available && <span className="text-red-400 text-xs ml-2">[Locked]</span>}
                              </motion.button>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Game Info */}
                <div className="mt-4 text-center text-gray-400 text-sm">
                  <p>
                    🎮 Interactive adventure game showcasing Mohamed's journey • Your choices shape the story and reveal
                    his skills
                  </p>
                  {gameState.gameComplete && (
                    <motion.div
                      className="mt-4 p-4 bg-green-900/20 border border-green-400/30 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <p className="text-green-400 font-semibold">🎉 Adventure Complete!</p>
                      <p className="text-gray-300 text-sm mt-1">
                        You've experienced Mohamed's journey and discovered what makes him unique. Ready to connect?
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </Inspectable>
        </motion.div>
      </div>
    </section>
  )
}
