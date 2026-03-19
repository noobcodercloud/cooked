"use client"

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  // const session = true; // For testing, replace with actual session data later
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
    <>
      <div className="min-h-[96vh] pt-15">
        <div className="flex items-center gap-6 mt-20">

          <div className="w-1/2">
            <div className="text-8xl font-semibold flex flex-col py-10 px-20 text-white">
              <span>Get</span>
              <span>Cooked</span>
            </div>
            <div className="px-20 text-white">
              <span>Judges your spotify listening habits and roast you</span>
            </div>
            {!session ? (
              <div className="px-20 py-10">
                <button
                  onClick={() => signIn("spotify")}
                  className="bg-green-400/60 hover:bg-green-600/90 transition-all text-gray-950 cursor-pointer font-bold py-3 px-8 rounded-full"
                >
                  Connect Spotify
                </button>
              </div>
            ) : (
              <div className="px-20 py-10">
                <button
                  onClick={handleGetRoasted}
                  disabled={loading}
                  className="bg-green-400/60 hover:bg-green-600/90 transition-all text-gray-950 cursor-pointer font-bold py-3 px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Cooking..." : "Get Roasted"}
                </button>
              </div>
            )}
          </div>

          <div className="w-1/2 px-20">
            {/* Right side roast display */}
            {loading && (
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="animate-pulse">
                  <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-white/20 rounded w-full mb-4"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                </div>
              </div>
            )}

            {roast && !loading && (
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">The opinion</h2>
                <p className="text-white/90 whitespace-pre-wrap leading-relaxed">
                  {roast}
                </p>
              </div>
            )}

            {!roast && !loading && session && (
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
                <p className="text-white/50 text-sm">
                  Click "Get Roasted" to see what we think about your music taste.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}