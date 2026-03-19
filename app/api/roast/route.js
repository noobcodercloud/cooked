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

Generate a hilarious roast (3-5 paragraphs) about their music taste. 
Focus on:
- Their top artists and genres
- Any embarrassing patterns (too much of one artist, guilty pleasures, etc.)
- The vibe/mood of their music choices
- Any contradictions in their taste

Make it entertaining and shareable!
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