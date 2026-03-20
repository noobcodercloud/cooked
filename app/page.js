"use client"

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetRoasted = async () => {
    setLoading(true);
    setRoast(""); // Clear previous roast
    
    try {
      // Fetch Spotify data
      const spotifyRes = await fetch("/api/spotify/top-data");
      const spotifyData = await spotifyRes.json();

      // Generate roast
      const roastRes = await fetch("/api/roast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spotifyData }),
      });
      const { roast } = await roastRes.json();

      setRoast(roast);
    } catch (error) {
      console.error("Error:", error);
      setRoast("Failed to generate roast. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-8 md:mt-16 lg:mt-20">
          
          {/* Left side - Title and Button */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold flex flex-col py-6 md:py-10 text-white text-center lg:text-left">
              <span>Get</span>
              <span>Cooked</span>
            </div>
            
            <div className="text-white/80 text-base md:text-lg text-center lg:text-left mb-8 max-w-md">
              <span>Judges your spotify listening habits and roast you</span>
            </div>
            
            <div className="w-full flex justify-center lg:justify-start">
              {!session ? (
                <button
                  onClick={() => signIn("spotify")}
                  className="bg-green-400/60 hover:bg-green-600/90 transition-all text-gray-950 cursor-pointer font-bold py-3 px-8 rounded-full w-full sm:w-auto"
                >
                  Connect Spotify
                </button>
              ) : (
                <button
                  onClick={handleGetRoasted}
                  disabled={loading}
                  className="bg-green-400/60 hover:bg-green-600/90 transition-all text-gray-950 cursor-pointer font-bold py-3 px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  {loading ? "Cooking..." : "Get Roasted"}
                </button>
              )}
            </div>
          </div>

          {/* Right side - Roast display */}
          <div className="w-full lg:w-1/2">
            {loading && (
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
                <div className="animate-pulse">
                  <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-white/20 rounded w-full mb-4"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                </div>
              </div>
            )}

            {roast && !loading && (
              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">The opinion</h2>
                <p className="text-white/90 whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                  {roast}
                </p>
              </div>
            )}

            {!roast && !loading && session && (
              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 text-center">
                <p className="text-white/50 text-sm md:text-base">
                  Click "Get Roasted" to see what we think about your music taste.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}