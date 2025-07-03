import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { groq } from "@ai-sdk/groq"

const MOHAMED_PROFILE_DATA = `
You are an AI assistant representing Mohamed Datt, a Full Stack Developer. Here's comprehensive information about Mohamed:

PERSONAL BACKGROUND:
- Full name: Mohamed Datt
- Born in Guinea, raised in NYC, currently in Norfolk, Virginia
- Height: 6'2"
- Location: Norfolk, Virginia, USA
- Learned English in 3 months using cartoons like Dora after facing early bullying and setbacks
- Grew into a resilient, self-driven developer with a passion for creative, AI-powered web experiences

EDUCATION:
- Currently enrolled: B.S. in Computer Science at Old Dominion University (Jan 2025 - Present)
- Graduated: A.S. in Computer Science from Tidewater Community College (Sep 2022 - Dec 2024)
- Relevant courses: Object Oriented Programming (OOP), Data Structures and Algorithms, Engineering Design

EXPERIENCE:
- Software Developer Intern at Product Manager Accelerator (Sep 2024 - Dec 2025)
- Won 1st place out of 13 teams for best final app
- Gained valuable insights into full-stack development and project management
- Actively contributed to team discussions and collaborative problem-solving

TECHNICAL SKILLS:
Frontend: React, Next.js, TailwindCSS, Vite, Framer Motion
Backend: Node.js, Supabase, PostgreSQL, MongoDB, Firebase
AI Tools: Gemini 2.0, Groq, Hugging Face
Other: Git, GitHub API, PayPal Integration, RapidAPI, AWS, CI/CD, GraphQL API

MAJOR PROJECTS:
1. EduSphere AI - AI-powered dashboard for students
   - Stack: Next.js, Supabase, Gemini, Hugging Face, TailwindCSS
   - Features: AI assistant for assignments, blog generator, multi-platform support, PayPal subscriptions

2. Interview Prep AI - AI-driven interview practice platform
   - Stack: Next.js, Firebase Auth, PostgreSQL, Gemini, Vapi Voice
   - Features: Mock interviews with AI feedback, resume analysis, job matching, voice-based answering

3. AI Content Generator - SaaS tool for content generation
   - Stack: Next.js 14, Supabase, Gemini, Hugging Face, Recharts
   - Features: Blog/social/product content generation, sentiment analysis, analytics dashboard

INTERESTS: Gaming, AI, HealthTech, Frontend Development, EdTech

CONTACT:
- Email: d.mohamed1504@gmail.com
- Phone: +1 518-704-9000
- GitHub: github.com/MeeksonJr
- LinkedIn: linkedin.com/in/mohamed-datt
- Portfolio: mohameddatt.com

PERSONALITY TRAITS: Resilient, Creative, Resourceful, Self-taught

GOALS:
- Short-term: Finish portfolio and deploy live, add dynamic GitHub repo integration
- Long-term: Land a full-time software engineering job, expand chatbot as interactive resume

Answer questions about Mohamed in first person as if you are him, but make it clear you're an AI assistant representing him. Be conversational, enthusiastic, and highlight his journey from Guinea to becoming a developer in Norfolk, Virginia.
`

// Groq model fallback chain
const GROQ_MODELS = [
  "llama-3.1-70b-versatile",
  "llama-3.1-8b-instant",
  "mixtral-8x7b-32768",
  "gemma2-9b-it",
  "llama3-70b-8192",
  "llama3-8b-8192",
]

async function tryGroqModels(messages: any[], systemPrompt: string) {
  for (let i = 0; i < GROQ_MODELS.length; i++) {
    const modelName = GROQ_MODELS[i]
    try {
      console.log(`🔄 Trying Groq model ${i + 1}/${GROQ_MODELS.length}: ${modelName}`)

      const result = await streamText({
        model: groq(modelName),
        system: systemPrompt,
        messages,
        maxTokens: 500,
      })

      console.log(`✅ Groq model ${modelName} succeeded!`)
      return result
    } catch (error) {
      console.error(`❌ Groq model ${modelName} failed:`, error.message)

      if (i === GROQ_MODELS.length - 1) {
        console.error("💥 All Groq models failed!")
        throw new Error(`All Groq models failed. Last error: ${error.message}`)
      }
    }
  }
}

export const maxDuration = 30

export async function POST(req: Request) {
  console.log("🚀 Chat API: Request received")

  try {
    const body = await req.json()
    console.log("📝 Chat API: Request body parsed:", {
      messagesCount: body.messages?.length,
      model: body.model,
      lastMessage: body.messages?.[body.messages.length - 1]?.content?.substring(0, 100) + "...",
    })

    const { messages, model = "gemini" } = body

    if (!messages || !Array.isArray(messages)) {
      console.error("❌ Chat API: Invalid messages format")
      throw new Error("Invalid messages format")
    }

    console.log(`🤖 Chat API: Using model: ${model}`)

    let result

    try {
      switch (model) {
        case "groq-llama":
        case "groq-mixtral":
        case "groq-gemma":
          console.log("🦙 Chat API: Initializing Groq models with fallback")
          result = await tryGroqModels(messages, MOHAMED_PROFILE_DATA)
          console.log("✅ Chat API: Groq response generated")
          break

        default:
          console.log("🌟 Chat API: Initializing Gemini model")

          // Try different Gemini models in order
          const geminiModels = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"]
          let geminiSuccess = false

          for (const geminiModel of geminiModels) {
            try {
              console.log(`🔄 Trying Gemini model: ${geminiModel}`)
              result = await streamText({
                model: google(geminiModel),
                system: MOHAMED_PROFILE_DATA,
                messages,
                maxTokens: 500,
                temperature: 0.7,
              })
              console.log(`✅ Gemini model ${geminiModel} succeeded!`)
              geminiSuccess = true
              break
            } catch (geminiError) {
              console.error(`❌ Gemini model ${geminiModel} failed:`, geminiError.message)
              continue
            }
          }

          if (!geminiSuccess) {
            console.log("🔄 All Gemini models failed, falling back to Groq...")
            result = await tryGroqModels(messages, MOHAMED_PROFILE_DATA)
            console.log("✅ Groq fallback succeeded!")
          }
      }

      console.log("📤 Chat API: Returning streaming response")

      // Add additional headers for better streaming
      const response = result.toDataStreamResponse({
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      })

      console.log("🎯 Chat API: Response created successfully")
      return response
    } catch (modelError) {
      console.error("🔥 Chat API: Model-specific error:", {
        model,
        error: modelError.message,
        stack: modelError.stack,
      })
      throw modelError
    }
  } catch (error) {
    console.error("💥 Chat API Error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    })

    return new Response(
      JSON.stringify({
        error: "Failed to process chat request",
        details: error.message,
        timestamp: new Date().toISOString(),
        model: req.body?.model || "unknown",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    )
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
