"use client"

import Image from "next/image";

import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

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
                  <span>Welcome, {session.user.name}</span>
                </div>
              )}
          </div>

          <div className="w-1/2">
            {/* Right side content goes here */}
            
          </div>

        </div>

      </div>
    </>
  )
}