"use client"; // Convert to a Client Component

import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/csc309-e11")
      .then((res) => res.text())
      .then((html) => setContent(html))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <main>
      <h1>Welcome to My App</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

