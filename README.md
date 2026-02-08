# GitXhibit 🚀

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**From GitHub to Portfolio. Instantly.**

Transform your GitHub profile into a stunning, AI-powered portfolio with beautiful templates and automated content generation.

[Demo](https://gitxhibit.vercel.app) · [Report Bug](https://github.com/k4rtikay/gitxhibit/issues) · [Request Feature](https://github.com/k4rtikay/gitxhibit/issues)

</div>

---

## Features

- **Beautiful Templates** - Multiple developer-focused portfolio templates with modern design aesthetics
- **AI-Powered Content** - Automatically generate compelling project descriptions using Groq AI
- **Live GitHub Sync** - Fetch and display your latest repositories, stats, and contribution graphs
- **Theme Customization** - Choose from multiple color themes and font combinations
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Dark Mode** - Built-in dark/light mode support
- **GitHub Authentication** - Secure OAuth integration with Better Auth
- **Save & Share** - Save your portfolio configurations and share with a unique URL
- **Lightning Fast** - Built with Next.js 16 and optimized for performance
- **Zero Config** - Just enter your GitHub username and get started

## Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** TailwindCSS 4
- **Animations:** Motion (Framer Motion)
- **Components:** Radix UI
- **State Management:** Zustand
- **Form Validation:** Zod

### Backend
- **Database:** Neon PostgreSQL
- **ORM:** Drizzle ORM
- **Authentication:** Better Auth
- **API Integration:** Octokit (GitHub API)
- **AI:** Groq SDK

### Developer Tools
- **Language:** TypeScript
- **Linting:** ESLint
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 20+ installed
- pnpm installed (`npm install -g pnpm`)
- GitHub account
- Neon PostgreSQL database
- Groq API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/k4rtikay/gitxhibit.git
   cd gitxhibit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database (Neon PostgreSQL)
   DATABASE_URL="your_neon_database_url"
   DATABASE_URL_UNPOOLED="your_neon_database_url_unpooled"
   
   # AI (Groq)
   GROQ_API_KEY="your_groq_api_key"
   
   # GitHub API
   GITHUB_TOKEN="your_github_personal_access_token"
   
   # Better Auth
   BETTER_AUTH_SECRET="your_random_secret_key"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # GitHub OAuth
   GITHUB_CLIENT_ID="your_github_oauth_client_id"
   GITHUB_CLIENT_SECRET="your_github_oauth_client_secret"
   
   # Development Mode (optional)
   NEXT_PUBLIC_DEV_MODE=true
   ```

4. **Set up the database**
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Environment Variables Guide

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Neon PostgreSQL connection string (pooled) | ✅ |
| `DATABASE_URL_UNPOOLED` | Neon PostgreSQL connection string (direct) | ✅ |
| `GROQ_API_KEY` | API key for Groq AI content generation | ✅ |
| `GITHUB_TOKEN` | GitHub Personal Access Token for API | ✅ |
| `BETTER_AUTH_SECRET` | Secret key for authentication | ✅ |
| `BETTER_AUTH_URL` | Base URL for auth callbacks | ✅ |
| `GITHUB_CLIENT_ID` | GitHub OAuth App Client ID | ✅ |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App Client Secret | ✅ |
| `NEXT_PUBLIC_DEV_MODE` | Enable dev mode with mock data | ❌ |

### Getting API Keys

- **Neon Database:** Sign up at [neon.tech](https://neon.tech)
- **Groq API:** Get your key at [console.groq.com](https://console.groq.com)
- **GitHub Token:** Create at [github.com/settings/tokens](https://github.com/settings/tokens)
- **GitHub OAuth:** Register app at [github.com/settings/developers](https://github.com/settings/developers)

## 📂 Project Structure

```
ai-folio/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── [username]/        # Dynamic portfolio routes
│   │   ├── api/               # API routes
│   │   ├── portfolio/         # Portfolio editor
│   │   └── page.tsx           # Landing page
│   ├── components/            # React components
│   │   ├── portfolio/         # Portfolio-specific components
│   │   ├── shared/            # Shared components
│   │   └── ui/                # UI primitives (Radix)
│   ├── db/                    # Database schema & config
│   ├── lib/                   # Utilities & helpers
│   │   ├── auth.ts           # Authentication setup
│   │   ├── github.ts         # GitHub API integration
│   │   ├── groq.ts           # AI content generation
│   │   ├── themes.ts         # Theme configurations
│   │   └── fonts.ts          # Font configurations
│   ├── schemas/              # Zod validation schemas
│   └── store/                # Zustand state management
├── drizzle/                  # Database migrations
├── public/                   # Static assets
└── package.json
```

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:push` | Push schema changes to database |
| `pnpm db:studio` | Open Drizzle Studio |
| `pnpm db:migrate` | Run database migrations |

## Usage

1. **Enter GitHub Username** - Start by entering any public GitHub username on the landing page
2. **Preview Portfolio** - See your portfolio generated with default settings
3. **Customize** - Click "Edit" to customize themes, fonts, and content
4. **Generate AI Content** - Use AI to generate professional project descriptions
5. **Save** - Sign in with GitHub to save your portfolio
6. **Share** - Share your unique portfolio URL with others

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [Groq](https://groq.com/) - AI inference
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [shadcn/ui](https://ui.shadcn.com/) - Component inspiration
- [Lucide](https://lucide.dev/) - Icons

## Contact

Kartikeya - [@k4rtikay](https://github.com/k4rtikay)

Project Link: [https://github.com/k4rtikay/gitxhibit](https://github.com/k4rtikay/gitxhibit)

---

<div align="center">

Made with ❤️ by [Kartikeya](https://github.com/k4rtikay)

⭐ Star this repo if you find it helpful!

</div>
