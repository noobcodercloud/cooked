"use client";

import { useState } from "react";

export default function TestGemini() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testGemini = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/test-gemini");
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResponse(data.response);
      }
    } catch (err) {
      setError("Failed to connect to API: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-20">
      <h1 className="text-4xl font-bold mb-8">Test Gemini API</h1>

      <button
        onClick={testGemini}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test Gemini API"}
      </button>

      {error && (
        <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {response && (
        <div className="mt-6 p-6 bg-green-100 border border-green-400 rounded">
          <p className="font-bold mb-2">Success! Response:</p>
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}