import { NextResponse } from "next/server";
export async function GET() {
  return new NextResponse(
    `<div id="auto-tester">
      Hi. I am xuruili, and I have learned how to develop a full-stack web app
      and deploy it!
    </div>`,
  );
}
