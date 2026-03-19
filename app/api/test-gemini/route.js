import { GoogleGenAI } from "@google/genai";

export async function GET() {
  try {
    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: "GEMINI_API_KEY not found in environment variables" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Explain how AI works in a few words",
    });
    console.log(response.text);

    return Response.json({
      success: true,
      response: response.text
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return Response.json(
      {
        error: error.message || "Unknown error occurred",
        details: error.toString()
      },
      { status: 500 }
    );
  }
}