export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <div id="auto-tester">
      Hi. I am xuruili, and I have learned how to develop a full-stack web app
      and deploy it!
    </div>
  `);
}

