export default async function Home() {
  // Fetch the API response
  const res = await fetch("http://localhost:3000/api/csc309-e11");
  const html = await res.text();

  return (
    <main>
      <h1>Welcome to My App</h1>
      {/* Render the HTML from API */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
