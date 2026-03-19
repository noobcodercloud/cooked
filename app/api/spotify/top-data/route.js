import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch top tracks
    const tracksResponse = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=20",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    // Check if response is OK before parsing
    if (!tracksResponse.ok) {
      const errorText = await tracksResponse.text();
      console.error("Spotify tracks error:", errorText);
      return Response.json(
        { error: "Failed to fetch Spotify data", details: errorText },
        { status: tracksResponse.status }
      );
    }

    const tracksData = await tracksResponse.json();

    // Fetch top artists
    const artistsResponse = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=20",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!artistsResponse.ok) {
      const errorText = await artistsResponse.text();
      console.error("Spotify artists error:", errorText);
      return Response.json(
        { error: "Failed to fetch Spotify data", details: errorText },
        { status: artistsResponse.status }
      );
    }

    const artistsData = await artistsResponse.json();

    // Fetch recently played
    const recentResponse = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=20",
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!recentResponse.ok) {
      const errorText = await recentResponse.text();
      console.error("Spotify recent error:", errorText);
      return Response.json(
        { error: "Failed to fetch Spotify data", details: errorText },
        { status: recentResponse.status }
      );
    }

    const recentData = await recentResponse.json();

    // Combine and simplify the data
    const spotifyData = {
      topTracks: tracksData.items?.map((track) => ({
        name: track.name,
        artist: track.artists[0].name,
        popularity: track.popularity,
      })) || [],
      topArtists: artistsData.items?.map((artist) => ({
        name: artist.name,
        genres: artist.genres,
        popularity: artist.popularity,
      })) || [],
      recentlyPlayed: recentData.items?.map((item) => ({
        name: item.track.name,
        artist: item.track.artists[0].name,
      })) || [],
    };

    return Response.json(spotifyData);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return Response.json(
      { error: "Failed to fetch Spotify data", message: error.message },
      { status: 500 }
    );
  }
}