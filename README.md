# 🔥 Get Cooked

Roasts your Spotify music taste using AI.

## What it does

Connect your Spotify account and let Google's Gemini AI roast your listening habits based on your top tracks, artists, and recently played songs.

## Tech Stack

- Next.js
- Spotify API
- Google Gemini AI
- NextAuth.js
- Tailwind CSS

## Setup

1. Clone and install:
```bash
git clone https://github.com/yourusername/get-cooked.git
cd get-cooked
npm install
```

2. Create `.env.local`:
```bash
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=random_secret
NEXTAUTH_URL=http://localhost:3000
GEMINI_API_KEY=your_gemini_key
```

3. Set up Spotify App:
   - Go to [Spotify Dashboard](https://developer.spotify.com/dashboard)
   - Create app, add redirect URI: `http://127.0.0.1:3000/api/auth/callback/spotify`

4. Get Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

5. Run:
```bash
npm run dev
```

Visit `http://127.0.0.1:3000`

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Update Spotify redirect URI with your Vercel URL

## License

MIT

---

Live at: [you-are-cooked.vercel.app](https://you-are-cooked.vercel.app)