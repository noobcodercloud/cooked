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

    // Create a prompt based on Spotify data
const prompt = `
You are a witty music critic who roasts people based on their Spotify listening habits. 
Be funny, sarcastic, and a bit mean (but not offensive). 

Here's their Spotify data:
${JSON.stringify(spotifyData, null, 2)}

Generate a hilarious roast (2-3 paragraphs) about their music taste. 

IMPORTANT RULES:
- You MUST mention at least 2-3 specific song names or artist names from their actual data
- Call out specific artists/songs to make it personal and relatable (e.g., "Oh, 'Blinding Lights' on repeat? Really?")
- Reference their actual listening patterns, not generic music taste commentary
- Make them think "damn, this AI actually knows what I listen to"
- Be specific about embarrassing patterns (like playing the same artist 5 times in a row)

Focus on:
- Their top artists and genres (mention them BY NAME)
- Specific songs they can't stop playing
- Any embarrassing patterns (too much of one artist, same song on repeat, etc.)
- The vibe/mood of their music choices
- Any contradictions in their taste

Make it entertaining, shareable, and most importantly - SPECIFIC to their actual data!
`;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });

    const roast = response.text();

    return Response.json({ roast });

  } catch (error) {
    console.error("Error generating roast:", error);
    return Response.json(
      { error: "Failed to generate roast" },
      { status: 500 }
    );
  }
}