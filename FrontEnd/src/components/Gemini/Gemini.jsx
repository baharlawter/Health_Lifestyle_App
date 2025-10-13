import React, { useState } from "react";

function Gemini() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      // Updated to port 8081
      const result = await fetch("http://localhost:8081/api/gemini/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!result.ok) {
        throw new Error("Failed to generate content");
      }

      const text = await result.text();
      setResponse(text);
    } catch (error) {
      setResponse("Error generating content: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="gemini-container">
      <h2>AI Content Generator</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Content"}
      </button>
      {response && (
        <div className="response">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Gemini;
