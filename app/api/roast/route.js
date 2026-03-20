import { GoogleGenAI } from "@google/genai";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { spotifyData } = await request.json();

    const prompt = `
You're that brutally honest friend who roasts people's Spotify Wrapped every year. No corporate speak, no "I notice that..." - just straight up dragging someone's music taste.

Their listening data:
${JSON.stringify(spotifyData, null, 2)}

Write a roast that sounds like a Twitter thread going viral. 2-3 paragraphs max.

THE VIBE:
- Talk like an actual person texting their friend, not an AI trying to be funny
- Use "bro", "bestie", "my guy", "girlie" naturally if it fits
- Short punchy sentences mixed with longer ones
- Actual slang, not "How delightful!" energy
- You can use "lmao", "fr", "nah" etc. but don't overdo it

MANDATORY - BE SPECIFIC:
- Drop at least 3 actual artist/song names from their data
- Point out EXACT patterns: "playing [Artist] 4 times in your top 10? seek help"
- Reference specific songs: "not [Song Name] being your comfort song 💀"
- Call out their top genre, their top artist, specific trends YOU SEE IN THE DATA

ROAST ANGLES (pick what applies to THEIR data):
- Same artist/song on repeat = no personality/stuck in 2019/etc
- Genre contradictions = identity crisis vibes
- Basic mainstream picks = NPC energy
- Obscure indie stuff = trying too hard to be different
- Sad music = therapy is cheaper than Spotify Premium
- Their top artist being [X] = specific personality read

WHAT TO AVOID:
- "I notice you have quite the penchant for..." 
- "Your musical journey suggests..."
- Starting with "Ah," or "Oh,"
- "One might say..." or any formal bs
- Ending with "But hey, you do you!" (too nice)
- Generic statements that could apply to anyone
- Bullet points or structured lists
- Joking about having spotify premium (they all do)
- Joking about the spotify platform itself (this isn't about spotify, it's about their taste)

GOOD EXAMPLES OF THE TONE:
- "Playing [Artist Name] 6 times in your top 10 is genuinely concerning behavior"
- "Tell me you never left your 2018 phase without telling me you never left your 2018 phase: [Song Name]"
- "[Artist] AND [Artist]? Pick a struggle bestie"
- "Not [Song Name] being on here... the way I would never admit this publicly"

Make it feel like it was written by a human who actually looked at their Spotify and is personally judging them. Be mean but not cruel. Make them laugh-cry.
`;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });

    const roast = response.text;

    return Response.json({ roast });
  } catch (error) {
    console.error("Error generating roast:", error);
    return Response.json(
      { error: "Failed to generate roast", message: error.message },
      { status: 500 }
    );
  }
}