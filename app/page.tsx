"use client"

import { useState, useMemo } from "react"
import { Search, ArrowUpRight } from "lucide-react"

interface AiTool {
  id: string
  name: string
  category: "Design" | "Coding" | "Writing" | "Chat" | "Audio"
  description: string
  tags: string[]
  workflow: string
  url: string
}

const aiTools: AiTool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Chat",
    description: "Advanced AI assistant for conversations, writing, analysis, and creative tasks.",
    tags: ["conversation", "writing", "analysis", "research", "brainstorm"],
    workflow: "Start a conversation and ask anything. Get instant responses and explanations.",
    url: "https://chat.openai.com",
  },
  {
    id: "claude",
    name: "Claude",
    category: "Writing",
    description: "Advanced AI assistant specialized in writing, analysis, and coding.",
    tags: ["writing", "analysis", "coding", "research", "content"],
    workflow: "Upload documents or chat directly. Get detailed analysis and well-written responses.",
    url: "https://claude.ai",
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Chat",
    description: "Google's powerful AI model for reasoning and problem-solving.",
    tags: ["conversation", "reasoning", "research", "multimodal", "analysis"],
    workflow: "Ask questions, upload images or files, get intelligent analysis and solutions.",
    url: "https://gemini.google.com",
  },
  {
    id: "v0",
    name: "v0",
    category: "Coding",
    description: "AI-powered web app generator that builds React and Next.js applications.",
    tags: ["webapp", "website", "react", "frontend", "builder", "make a website"],
    workflow: "Describe your app or upload screenshots. v0 generates production-ready code.",
    url: "https://v0.dev",
  },
  {
    id: "bolt",
    name: "Bolt.new",
    category: "Coding",
    description: "AI IDE for building full-stack web apps with real-time preview.",
    tags: ["webapp", "website", "fullstack", "builder", "development", "make a website"],
    workflow: "Start with an idea or upload a screenshot. Build and deploy in minutes.",
    url: "https://bolt.new",
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "Coding",
    description: "AI-powered full-stack development environment with instant deployment.",
    tags: ["webapp", "website", "fullstack", "builder", "development", "deploy"],
    workflow: "Chat with AI to build features. See live preview and deploy instantly.",
    url: "https://lovable.dev",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "Design",
    description: "Create stunning images with AI-powered visual generation.",
    tags: ["image generation", "design", "art", "illustration", "visual"],
    workflow: "Use /imagine command and describe your vision. Get four variations to refine.",
    url: "https://midjourney.com",
  },
  {
    id: "ideogram",
    name: "Ideogram",
    category: "Design",
    description: "AI image generator focused on text rendering and realistic designs.",
    tags: ["image generation", "design", "art", "text rendering", "visual"],
    workflow: "Type your prompt with detailed descriptions. Generate and edit images instantly.",
    url: "https://ideogram.ai",
  },
  {
    id: "aura",
    name: "Aura.build",
    category: "Design",
    description: "AI website builder that creates beautiful, responsive websites in minutes.",
    tags: ["website builder", "design", "website", "frontend", "make a website"],
    workflow: "Describe your site or upload inspiration. AI generates design and code.",
    url: "https://aura.build",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    category: "Coding",
    description: "AI-powered code completion and generation for developers.",
    tags: ["coding", "code completion", "development", "programming"],
    workflow: "Start typing code comments. Copilot suggests completions and functions.",
    url: "https://github.com/features/copilot",
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "Coding",
    description: "AI-first code editor with advanced autocomplete and refactoring tools.",
    tags: ["code editor", "coding", "development", "programming", "ai editor"],
    workflow: "Install Cursor editor. Use Ctrl+K for AI commands and code generation.",
    url: "https://cursor.com",
  },
  {
    id: "suno",
    name: "Suno",
    category: "Audio",
    description: "Create original music and songs with AI using simple text prompts.",
    tags: ["music generation", "audio", "songwriting", "creative"],
    workflow: "Describe a song style and lyrics. Suno generates full tracks with vocals.",
    url: "https://suno.com",
  },
  {
    id: "jasper",
    name: "Jasper",
    category: "Writing",
    description: "AI content platform for creating marketing copy, blog posts, and more.",
    tags: ["content creation", "writing", "marketing", "copywriting", "seo"],
    workflow: "Select template, add brief. Get high-quality content ready to publish.",
    url: "https://jasper.ai",
  },
  {
    id: "copyai",
    name: "Copy.ai",
    category: "Writing",
    description: "AI copywriting tool for marketing content, emails, and social media.",
    tags: ["copywriting", "marketing", "content", "writing", "email"],
    workflow: "Choose a use case and fill in details. Generate engaging copy in seconds.",
    url: "https://copy.ai",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Audio",
    description: "AI text-to-speech with natural-sounding voices and audio synthesis.",
    tags: ["text to speech", "audio", "voice generation", "narration"],
    workflow: "Paste text and select voice. Generate realistic speech audio instantly.",
    url: "https://elevenlabs.io",
  },
]

const categories = ["Design", "Coding", "Writing", "Chat", "Audio"]

export default function AiCompass() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      const searchLower = searchQuery.toLowerCase()

      // Check if search matches name, description, or any tag
      const matchesSearch =
        !searchQuery ||
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchLower))

      // Check if category matches (only filter if a category is selected)
      const matchesCategory = !selectedCategory || tool.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const toggleCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category)
  }

  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
              Find the perfect{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 text-pretty leading-relaxed">
              Discover and explore the best AI tools for design, coding, writing, audio, and conversations. Find exactly
              what you need.
            </p>

            {/* Search Bar */}
            <div className="glass mb-8 p-1 w-full max-w-2xl mx-auto">
              <div className="flex items-center gap-3 px-6 py-4">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, description, or keywords (e.g., 'make a website')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent w-full outline-none text-white placeholder-slate-400 text-base"
                />
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "glass bg-purple-500/20 border-purple-400/50 text-white"
                      : "glass text-slate-300 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-slate-400 text-sm">
              Showing {filteredTools.length} of {aiTools.length} tools
            </p>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="px-4 py-20 max-w-6xl mx-auto">
          {filteredTools.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg mb-6">No AI tools found. Try adjusting your search or filters.</p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 hover:text-purple-100 font-medium transition-all duration-300"
              >
                Show All Tools
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {filteredTools.map((tool, index) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass glass-card group p-6 flex flex-col justify-between cursor-pointer hover:scale-105 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2 min-h-80" : "min-h-72"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{tool.description}</p>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 mb-4">
                      <p className="text-slate-300 text-xs leading-relaxed">
                        <span className="font-semibold text-slate-200">How to use:</span> {tool.workflow}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10 gap-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">
                      {tool.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(tool.url, "_blank")
                      }}
                      className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 hover:text-purple-100 text-sm font-medium transition-all duration-300 group-hover:scale-110"
                    >
                      Launch
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
