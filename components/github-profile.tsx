"use client"

import { motion } from "framer-motion"
import { Github, MapPin, LinkIcon, Building, Calendar, Users } from "lucide-react"
import { useState, useEffect } from "react"

interface GitHubProfile {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  location: string
  blog: string
  company: string
  followers: number
  following: number
  public_repos: number
  created_at: string
}

export default function GitHubProfile() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/github-repos")
        const data = await response.json()

        if (data.success && data.stats) {
          setProfile({
            login: "MeeksonJr",
            name: "Mohamed Datt",
            bio: data.stats.bio || "Full Stack Developer passionate about AI and web technologies",
            avatar_url: data.stats.avatar_url || "https://github.com/MeeksonJr.png",
            html_url: data.stats.profile_url,
            location: data.stats.location || "Norfolk, Virginia",
            blog: data.stats.blog || "https://mohameddatt.com",
            company: data.stats.company || "",
            followers: data.stats.followers,
            following: data.stats.following,
            public_repos: data.stats.total_repos,
            created_at: data.stats.created_at || "2020-01-01T00:00:00Z",
          })
        }
      } catch (error) {
        console.error("Failed to fetch GitHub profile:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading || !profile) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const joinedDate = new Date(profile.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  return (
    <motion.div
      className="bg-gray-900/50 border border-gray-700 rounded-lg p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <img
          src={profile.avatar_url || "/placeholder.svg"}
          alt={profile.name}
          className="w-16 h-16 rounded-full border-2 border-green-400"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm mb-3">@{profile.login}</p>

          {profile.bio && <p className="text-gray-300 text-sm mb-3">{profile.bio}</p>}

          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-3">
            {profile.location && (
              <div className="flex items-center gap-1">
                <MapPin size={12} />
                <span>{profile.location}</span>
              </div>
            )}

            {profile.blog && (
              <div className="flex items-center gap-1">
                <LinkIcon size={12} />
                <a
                  href={profile.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  {profile.blog.replace("https://", "")}
                </a>
              </div>
            )}

            {profile.company && (
              <div className="flex items-center gap-1">
                <Building size={12} />
                <span>{profile.company}</span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>Joined {joinedDate}</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Users size={14} className="text-gray-400" />
              <span className="font-semibold text-white">{profile.followers}</span>
              <span className="text-gray-400">followers</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-white">{profile.following}</span>
              <span className="text-gray-400">following</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-white">{profile.public_repos}</span>
              <span className="text-gray-400">repos</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
