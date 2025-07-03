# 🚀 Mohamed Datt's Creative Portfolio

\`\`\`
 ███▄ ▄███▓ ▒█████  
▓██▒▀█▀ ██▒▒██▒  ██▒
▓██    ▓██░▒██░  ██▒
▒██    ▒██ ▒██   ██░
▒██▒   ░██▒░ ████▓▒░
░ ▒░   ░  ░░ ▒░▒░▒░ 
░  ░      ░  ░ ▒ ▒░ 
░      ░   ░ ░ ░ ▒  
       ░       ░ ░  
\`\`\`

> **From Guinea to Norfolk, from cartoons to code - the journey continues...**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11.17-pink?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

## 🌟 About This Portfolio

Welcome to my creative, terminal-inspired portfolio! This isn't just another developer portfolio - it's a showcase of modern web development, AI integration, and creative design. Built with cutting-edge technologies and featuring interactive elements that demonstrate my skills as a Full Stack Developer.

**Live Demo:** [mohameddatt.com](https://mohameddatt.com) *(Coming Soon)*

## ✨ Features

### 🎨 **Creative Design**
- **Terminal-Inspired UI**: Black & white theme with green accents
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach
- **Interactive Elements**: Hover effects and micro-interactions

### 🤖 **AI-Powered Interactions**
- **Dual Chatbots**: Gemini and Groq AI models
- **Personal Assistant**: Trained on my complete profile
- **Element Inspector**: AI explains code and design decisions
- **Multiple Model Support**: Fallback system for reliability

### 🎯 **Interactive Features**
- **Command Hub**: Circular navigation menu
- **Inspector Mode**: Click any element to learn about it
- **Floating Navigation**: Smooth section scrolling
- **Progress Indicator**: Visual scroll progress

### 📧 **Professional Contact**
- **Resend Integration**: Professional email handling
- **React Email Templates**: Beautiful, responsive emails
- **Form Validation**: Client and server-side validation
- **Auto-responses**: Confirmation emails for users

### 🔧 **Developer Experience**
- **TypeScript**: Full type safety
- **Modern React**: Server Components and Actions
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 15.1.3 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

### **AI & APIs**
- **AI SDK**: Vercel AI SDK
- **Models**: Gemini 2.0 Flash, Groq (Llama, Mixtral)
- **Email**: Resend + React Email
- **GitHub**: REST API integration

### **Deployment**
- **Platform**: Vercel
- **Domain**: Custom domain ready
- **Environment**: Production optimized

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/MeeksonJr/portfolio-2025.git
   cd portfolio-2025
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

4. **Configure your environment variables**
   \`\`\`env
   # Required for AI chatbots
   GEMINI_API_KEY=your_gemini_api_key
   GROQ_API_KEY=your_groq_api_key
   
   # Required for contact form
   RESEND_API_KEY=your_resend_api_key
   
   # Optional for GitHub integration
   GITHUB_TOKEN=your_github_token
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Variables

| Variable | Required | Description | Where to Get |
|----------|----------|-------------|--------------|
| `GEMINI_API_KEY` | ✅ | Google Gemini AI API key | [Google AI Studio](https://makersuite.google.com/app/apikey) |
| `GROQ_API_KEY` | ✅ | Groq AI API key | [Groq Console](https://console.groq.com/keys) |
| `RESEND_API_KEY` | ✅ | Resend email service key | [Resend Dashboard](https://resend.com/api-keys) |
| `GITHUB_TOKEN` | ⚪ | GitHub personal access token | [GitHub Settings](https://github.com/settings/tokens) |

## 📁 Project Structure

\`\`\`
portfolio-2025/
├── 📁 app/
│   ├── 📁 actions/          # Server Actions
│   ├── 📁 api/              # API Routes
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── 📁 components/
│   ├── 📁 emails/           # Email templates
│   ├── 📁 ui/               # shadcn/ui components
│   ├── about.tsx            # About section
│   ├── ai-chatbot-simple.tsx # Main chatbot
│   ├── command-hub.tsx      # Circular navigation
│   ├── contact.tsx          # Contact form
│   ├── education.tsx        # Education timeline
│   ├── experience.tsx       # Work experience
│   ├── footer.tsx           # Footer component
│   ├── github-showcase.tsx  # GitHub repos
│   ├── hero.tsx             # Landing section
│   ├── inspect-*.tsx        # Inspector mode
│   ├── mini-inspector.tsx   # Element inspector
│   ├── projects.tsx         # Featured projects
│   ├── skills.tsx           # Technical skills
│   └── typing-effect.tsx    # Typing animation
├── 📁 public/
│   ├── 📁 images/           # Images and assets
│   └── resume-*.pdf         # Resume file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
\`\`\`

## 🎮 Usage Guide

### **Navigation**
- **Command Hub**: Click the green terminal icon (top-right) for quick navigation
- **Floating Nav**: Use the dots on the left side for section jumping
- **Smooth Scrolling**: All navigation includes smooth scroll animations

### **AI Chatbots**
- **Main Chat**: Click the chat bubble (bottom-right) to talk with Mohamed
- **Inspector Chat**: Enable inspector mode and click any element for technical details
- **Model Selection**: Switch between Gemini and Groq models in settings

### **Inspector Mode**
- **Enable**: Click the "Inspect Mode" button (top-left)
- **Explore**: Click any element to see technical details
- **Learn**: Ask the AI about implementation details
- **Exit**: Click the X button or toggle off

### **Contact Form**
- **Professional**: Sends formatted emails via Resend
- **Validation**: Real-time form validation
- **Confirmation**: Success messages and email confirmations

## 🎨 Customization

### **Colors & Theme**
\`\`\`css
/* Primary colors in globals.css */
:root {
  --primary: #22c55e;      /* Green */
  --background: #000000;    /* Black */
  --foreground: #ffffff;    /* White */
}
\`\`\`

### **Content Updates**
- **Personal Info**: Update `components/hero.tsx` and `components/about.tsx`
- **Projects**: Modify `components/projects.tsx`
- **Experience**: Edit `components/experience.tsx`
- **Skills**: Update `components/skills.tsx`

### **AI Responses**
- **Main Chat**: Update profile data in `app/api/simple-chat/route.ts`
- **Inspector**: Modify element info in `components/inspect-mode-context.tsx`

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### **Other Platforms**
- **Netlify**: Works with static export
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform deployment

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements!

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add some amazing feature'
   \`\`\`
4. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
5. **Open a Pull Request**

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Bundle Size**: Minimized with tree shaking
- **Images**: Optimized with Next.js Image component

## 🔒 Security

- **Environment Variables**: Secure API key handling
- **Form Validation**: Server-side validation
- **Rate Limiting**: API route protection
- **CORS**: Proper cross-origin handling

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS 14+, Android 10+

## 🐛 Known Issues

- [ ] GitHub API rate limiting without token
- [ ] Some animations may be reduced on low-power devices
- [ ] Email delivery depends on Resend service status

## 🔮 Future Enhancements

- [ ] **Blog Integration**: MDX-powered blog
- [ ] **Dark/Light Mode**: Theme switching
- [ ] **Analytics**: Visitor tracking
- [ ] **CMS Integration**: Content management
- [ ] **PWA Features**: Offline support
- [ ] **3D Elements**: Three.js integration

## 📊 Analytics & Monitoring

- **Performance**: Web Vitals monitoring
- **Errors**: Error boundary implementation
- **Usage**: Contact form analytics
- **AI**: Chatbot interaction tracking

## 🎯 Learning Resources

This portfolio demonstrates:
- **Modern React Patterns**: Server Components, Actions
- **AI Integration**: Multiple model handling
- **Animation Techniques**: Framer Motion best practices
- **Email Systems**: Professional email handling
- **TypeScript**: Advanced type patterns
- **Performance**: Optimization techniques

## 📞 Contact & Support

**Mohamed Datt**
- 📧 Email: [d.mohamed1504@gmail.com](mailto:d.mohamed1504@gmail.com)
- 🐙 GitHub: [@MeeksonJr](https://github.com/MeeksonJr)
- 💼 LinkedIn: [mohamed-datt](www.linkedin.com/in/mohamed-datt-b60907296)
- 🌐 Portfolio: [mohameddatt.com](https://mohameddatt.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vercel Team**: For the amazing AI SDK and deployment platform
- **Framer**: For the incredible Motion library
- **Tailwind Labs**: For the utility-first CSS framework
- **Resend Team**: For the developer-friendly email service
- **Open Source Community**: For the countless libraries and tools

---

<div align="center">

**Built with ❤️ by Mohamed Datt**

*From Guinea to Norfolk, Virginia - The journey continues...*

[![GitHub stars](https://img.shields.io/github/stars/MeeksonJr/portfolio-2025?style=social)](https://github.com/MeeksonJr/portfolio-2025)
[![Twitter Follow](https://img.shields.io/twitter/follow/MeeksonJr?style=social)](https://twitter.com/MeeksonJr)

</div>
